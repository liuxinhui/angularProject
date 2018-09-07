'use strict';

//.value 是创建全局变量
app.value('dict', {}).run(['dict', '$http', function(dict, $http){
  $http.get('data/city.json').then(function(resp){
    dict.city = resp;
  });
  $http.get('data/salary.json').then(function(resp){
    dict.salary = resp;
  });
  $http.get('data/scale.json').then(function(resp){
    dict.scale = resp;
  });
}]);