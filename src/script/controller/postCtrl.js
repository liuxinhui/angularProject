'use strict';
app.controller('postCtrl',['$scope','$http','$state',function($scope,$http,$state){
	$scope.tabList=[{
		id:'all',
		name:'全部'
	},{
		id:'pass',
		name:'面试邀请'
	},{
		id:'fail',
		name:'不合格'
	}]
	$http.get('data/myPost.json').then(function(res){
		console.log(res)
		$scope.positionList=res.data;
	})
	$scope.filterObj = {};
	$scope.tClick = function(id,name){
		switch(id){
			case 'all':
				delete $scope.filterObj.state;
				break;
			case 'pass':
				$scope.filterObj.state='1';
				break;
			case 'fail':
				$scope.filterObj.state='-1';
				break;
			default:
		}
	}
}])

