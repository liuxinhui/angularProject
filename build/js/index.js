'use strict';

//依赖声明
var app = angular.module('app', ['ui.router']);
'use strict';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  });
  $urlRouterProvider.otherwise('main');
}])
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
'use strict';

app.directive('appFoot', [function () {
	return {
		restrict: 'A',
		replace:true,
		templateUrl:'view/template/foot.html',

	};
}])
'use strict';

app.directive('appHead', [function () {
	return {
		restrict: 'A',
		replace:true,
		templateUrl:'view/template/head.html',

	};
}])