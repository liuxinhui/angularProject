'use static';

app.service('cache', ['$cookies',function ($cookies) {
	//存入
	this.put = function(key,value){
		$cookies.put(key,value);
	};
	//取出
	this.get = function(key){
		return $cookies.get(key);
	};
	//移除
	this.remove = function(key){
		return $cookies.remove(key);
	};
}]);