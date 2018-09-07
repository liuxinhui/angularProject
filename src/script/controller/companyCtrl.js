'use strict';

app.controller('companyCtrl', ['$http','$scope','$state', function ($http,$scope,$state) {
	var companyCon = {} || companyCon;
	$http.get('/data/company.json?id='+$state.params.id).then(function(res){
		console.log('00')
		console.log(res.data)
		companyCon.xq=res.data;
	})

	$scope.companyCon = companyCon
}])