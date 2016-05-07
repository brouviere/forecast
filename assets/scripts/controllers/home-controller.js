mainApp.controller('HomeController', ['$scope','$http', function($scope,$http) {
	//var targetApi = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=46b046bae99b8acf09f160a1749f3c9b"
	// Simple GET request example:
	
	$scope.searchCity = function (city) {
		var urlSearch = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=46b046bae99b8acf09f160a1749f3c9b";
		//console.log(urlSearch);
		var dataCity = [];

		$http({
			method: 'GET',
			url: urlSearch
		}).then(function successCallback(response) {
		dataCity = response.data;
		//console.log(dataCity);

		// Geography
		$scope.cityName = dataCity.name;
		$scope.country = dataCity.sys.country;
		$scope.getColor = function(){
			if(dataCity.sys.country === 'FR'){
			return 'fr';
			}
			else if(dataCity.sys.country === 'JP'){
				return 'jp';
			}
			else if (dataCity.sys.country === 'US'){
				return 'us';
			}
			else{
				return 'df';
			};
		}

		// Date
		//$scope.dt = dataCity.dt;
		$scope.dt = new Date();
		//console.log($scope.dt);
		//$scope.getDate = function() {
		//	var timestamp = Date.now();
		//	return timestamp;
		//}
		

		

		// Temperatures
		$scope.main = dataCity.main;
		//console.log($scope.main);
		$scope.tempC = $scope.main.temp -273;
		$scope.tempF = $scope.main.temp;

		// Weather
		$scope.weatherMain = dataCity.weather[0].main;
		$scope.weatherDescription = dataCity.weather[0].description;
		$scope.weatherIcon = dataCity.weather[0].icon;
		//console.log($scope.weatherMain);
		//console.log($scope.weatherIcon);

		// Wind
		$scope.windSpeed = dataCity.wind.speed;
		$scope.windDirection = dataCity.wind.deg
		// console.log($scope.windSpeed);
		// console.log($scope.windDirection);

		// // Change icon
		// $scope.getIcon = function() {

		// }

	  }, function errorCallback(response) {
		//console.log('yo');
		//console.log(response.data);
		dataCity = false;
	  });

		return dataCity;
	}
	// $http({
	//   method: 'GET',
	//   url: targetApi
	// }).then(function successCallback(response) {
	// 	var resp = response.data;
	// 	console.log (resp);
	// 	//console.log(response.data.main.temp);

	// 	$scope.cityName = response.data.name;
	// 	$scope.weather = response.data.weather;
	// 	$scope.main = response.data.main;
	// 	$scope.wind = response.data.wind;
	// 	$scope.hour = response.data.dt;
	// 	$scope.country = response.data.sys.country;
		
	//   }, function errorCallback(response) {
	// 	//console.log('yo');
	// 	console.log(response.data);
	//   });
	$scope.severalCities = function (){
		var urlSearch = "http://api.openweathermap.org/data/2.5/find?lat=43.5333295&lon=5.43333&cnt=10&appid=46b046bae99b8acf09f160a1749f3c9b";
		//console.log(urlSearch);
		var dataCities = [];

		$http({
			method: 'GET',
			url: urlSearch
		}).then(function successCallback(response) {
		dataCities = response.data;
		//console.log(dataCities);

		$scope.list = dataCities.list;
		//console.log($scope.list);
		for (var i = 0; i < $scope.list.length; i++) {
			$scope.cities = $scope.list[i];
			console.log($scope.cities);	
		// 	console.log($scope.cities.name);		
		};



		}, function errorCallback(response) {
		//console.log('yo');
		console.log(dataCities);
		dataCities = false;
	  });

		return dataCities;
	}
}
]);