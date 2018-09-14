'use strict';

app.controller('mainCtrl', ['$http','$scope','cache', function ($http,$scope,cache) {
	var mainCon = {} || mainCon;
	//请求json数据 
	$http.get('/data/positionList.json').then(function(res){
		console.log(res)
		mainCon.list = res.data;
	});
	if(cache.get('name')){
		mainCon.name = cache.get('name');
		mainCon.image = cache.get('image');
	}
	console.log('12121213')
	console.log(mainCon.name)
	$scope.mainCon = mainCon
}])