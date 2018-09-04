'use static';

app.directive('appPositionClass', [function () {
	return {
		restrict: 'A',
		replace:true,
		templateUrl:'view/template/positionClass.html',
		scope:{
			data:'='
		}
	};
}])