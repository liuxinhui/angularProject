'use strict';

app.controller('positionCtrl', ['$http','$scope','$state','$q','cache',function ($http,$scope,$state,$q,cache) {
	var positionCon = {} || positionCon;
	$scope.isLogin= !!cache.get('name');
	$scope.message = $scope.isLogin?'投个简历':'去登录';
	function getPosition(){
		var def = $q.defer();
		$http.get('/data/position.json',{
			params:{
				//注入$state 获取参数
				id:$state.params.id
			}
		}).then(function(res){
			positionCon.posCon=res.data;
			if(positionCon.posCon.posted) {
		        $scope.message = '已投递';
		     }
			def.resolve(res.data)
		});
		return def.promise;
	}

	function getCompany(id){
		$http.get('/data/company.json?id='+id).then(function(resp){
			positionCon.company = resp.data;
			console.log(positionCon.company)
		})
	}
	getPosition().then(function(obj){
		getCompany(obj.companyId)
	})
	
	$scope.go=function(){
		console.log('11111')
		console.log($state.params.id)
		if($scope.message !=='已投递'){
			if($scope.isLogin){
				$http.post('data/handle.json',{
					id:$state.params.id
				}).then(function(res){
					console.log('res')
					console.log(res)
					$scope.message = '已投递'
				})
			}else{
				$state.go('login')
			}
		}
		


	}


	$scope.positionCon = positionCon
}])