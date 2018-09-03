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
	mainCon.list=[{
		id:1,
		name:'大唐',
		imgSrc:'image/company-1.png',
		companyName:'大唐网络',
		city:'北京',
		industry:'互联网',
		time:'2018.9.3'
	},{
		id:2,
		name:'大唐',
		imgSrc:'image/company-2.png',
		companyName:'大唐网络',
		city:'上海',
		industry:'互联网',
		time:'2018.9.5'
	}];
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
'use static';

app.directive('appPositionList', [function () {
	return {
		restrict: 'A',
		replace:true,
		templateUrl:'view/template/positionList.html',
		scope:{
			data:'='
		}
	};
}])