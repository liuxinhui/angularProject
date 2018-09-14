'use static';
app.controller('registerCtrl',['$interval','$http','$state','$scope',function($interval,$http,$state,$scope){
	var registerCon = {} || registerCon;
	registerCon.submit=function(){
		//console.log($scope.user)
		$http.post('data/regist.json',$scope.user).then(function(res){
			console.log(res)
			//注册完成后 跳转至登录页面
			$state.go('login') 
		})
	}

	//短信倒计时 注意controller里需要注入$interval
	var count = 60;
	registerCon.send=function(){
		$http.get('data/code.json').then(function(res){
			console.log(res);
			if(res.data.state ===1){
				registerCon.time='60s';	
				count = 60;
				var interval = $interval(function(){
					if(count<=0){
						//当count小于等于0时 取消当前运行的函数
						$interval.cancel(interval);
						registerCon.time=''
					}else{
						count--;
						registerCon.time= count +'s'
					}
					
				},1000)
			}
			
		})
	}

	$scope.registerCon= registerCon;
}])