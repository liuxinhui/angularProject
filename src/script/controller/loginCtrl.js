'use strict';
app.controller('loginCtrl',['$scope','$http','$state','cache',function($scope,$http,$state,cache){
	var loginCon={} || loginCon;
	loginCon.submit=function(){
		$http.get('data/login.json',$scope.user).then(function(res){
			console.log('login')
			console.log(res);
			cache.put('id',res.data.id);
		    cache.put('name',res.data.name);
		    cache.put('image',res.data.image);
			$state.go('main')
		})
	}


	$scope.loginCon = loginCon
}])
