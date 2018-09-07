'use static';

app.directive('appHeadBar', [function () {
	return {
		restrict: 'A',
		replace:true,
		templateUrl:'view/template/headBar.html',
		scope:{
			text:'@'
		},
		link:function(scope){
			scope.back=function(){
				//浏览器返回的效果
				window.history.back();
			};
		}
	};
}])