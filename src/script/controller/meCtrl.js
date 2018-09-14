'use strict';
app.controller('meCtrl',['$scope','$http','$state','cache',function($scope,$http,$state,cache){
	var meCon={} || meCon;
	if(cache.get('name')){
		meCon.name = cache.get('name');
		meCon.image = cache.get('image');
	}
	meCon.logOut=function(){
		cache.remove('id');
		cache.remove('name');
		cache.remove('image');
		$state.go('login')
	}


	$scope.meCon = meCon
}])

