mainApp.controller('SelectController', ['$scope','$http', function($scope,$http) {
	$http({
	  method: 'GET',
	  url: 'cities.json'
	}).then(function successCallback(response) {
		console.log(response.data);
		console.log("plop");
		for(i=0;i<response.data.length;i++){
			$scope.cities = response.data[i].name;
			console.log($scope.cities);
		}
		//console.log(response.data.name);
		//$scope.users = response.data;
	  }, function errorCallback(response) {
		console.log('yopla');
		console.log(response.data);
	  });
}
]);