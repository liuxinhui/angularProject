'use static';

app.directive('appTab', [function () {
	return {
		restrict: 'AC',
		replace:true,
		templateUrl:'view/template/tab.html',
		scope:{
			list:'=',
			tabClick:'&'
		},
		link:function($scope){
			$scope.click=function(tab){
				//console.log(tab)
				$scope.selectId = tab.id;
				//以下方法通知副控制器 元素被点击了
				$scope.tabClick(tab)
			}
		}
	};
}])