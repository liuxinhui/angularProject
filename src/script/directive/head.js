'use strict';

app.directive('appHead', [function () {
	return {
		restrict: 'A',
		replace:true,
		templateUrl:'view/template/head.html',

	};
}])