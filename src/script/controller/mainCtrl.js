'use strict';

app.controller('mainCtrl', ['$http','$scope', function ($http,$scope) {
	var mainCon = {} || mainCon;
	mainCon.kk=function(){
		alert('123')
	}
	mainCon.cancel = function(){
		console.log('打印')
	}

	$scope.mainCon = mainCon
}])