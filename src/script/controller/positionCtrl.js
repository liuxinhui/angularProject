'use strict';

app.controller('positionCtrl', ['$http','$scope','$state','$q','cache',function ($http,$scope,$state,$q,cache) {
	var positionCon = {} || positionCon;
	positionCon.isLogin=false;
	//cache.put('mm','123')
	function getPosition(){
		var def = $q.defer();
		$http.get('/data/position.json',{
			params:{
				//注入$state 获取参数
				id:$state.params.id
			}
		}).then(function(res){
			positionCon.posCon=res.data;
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
	


	$scope.positionCon = positionCon
}])