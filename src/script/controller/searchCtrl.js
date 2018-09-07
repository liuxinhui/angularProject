'use strict';

app.controller('searchCtrl', ['$http','$scope','$state','$q','cache','dict',function ($http,$scope,$state,$q,cache,dict) {
	var searchCon = {} || searchCon;
	searchCon.getPosition = function(){
		$http.get('/data/positionList.json',{
			params:{
				name:searchCon.name
			}
		}).then(function(res){
			searchCon.positionList=res.data
		})
	}  
	searchCon.getPosition()
	searchCon.tabList=[{
		id:'city',
		name:'城市'
	},{
		id:'salary',
		name:'薪水'
	},{
		id:'scale',
		name:'公司规模'
	}];
	$scope.sheet = {};
	$scope.filterObj = {};
	var tabId = '';
	$scope.tClick=function(id,name){
		tabId = id;
		console.log('ppp')
		console.log(id,name)
		$scope.sheet.list = dict[id];
		console.log(dict,id)
		$scope.sheet.visible = true;
	}

	$scope.sClick = function(id,name){
		console.log(name)
		if(id){
			angular.forEach(searchCon.tabList, function(item){
				if(item.id===tabId) {
		          item.name = name;
		        }
			})
			$scope.filterObj[tabId + 'Id'] = id;
		}else{
			delete $scope.filterObj[tabId + 'Id'];
			angular.forEach(searchCon.tabList, function(item){
				if(item.id===tabId) {
		          switch (item.id) {
		            case 'city':
		              item.name = '城市';
		              break;
		            case 'salary':
		              item.name = '薪水';
		              break;
		            case 'scale':
		              item.name = '公司规模';
		              break;
		            default:
		          }
		        }
			})
		}
	}

	$scope.searchCon = searchCon
}])