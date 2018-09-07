'use strict';

app.controller('mainCtrl', ['$http','$scope', function ($http,$scope) {
	var mainCon = {} || mainCon;
	//请求json数据 
	$http.get('/data/positionList.json').then(function(res){
		console.log(res)
		mainCon.list = res.data;
	});
	$scope.mainCon = mainCon
}])