mainApp.controller('HomeController', ['$scope','$http', '$q', '$filter', 'requestApi', 'cityTemperature', 'cityWind', function($scope,$http,$q,$filter,$requesterApi, $cityTemperature,$cityWind) {

	// Get current Date & Time
	$scope.dtNow = Date.now();
	setInterval(function () {
		$scope.$apply(function(){
			$scope.dtNow += 1000;
		});
	},1000);

	$scope.searchCity = function (city) {
		var urlSearch = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=46b046bae99b8acf09f160a1749f3c9b";
		$requesterApi.singleCity(urlSearch).then(function(data) {
			console.log(data);

			// Appel d'une custom Factory
			// Temperatures
			$scope.temp = $cityTemperature.getTemperature(data);

			// Geography
			$scope.cityName = data.name;
			$scope.country = data.sys.country;

			// Date
			$scope.dt = data.dt*1000;

			// Weather
			$scope.weatherMain = data.weather[0].main;
			$scope.weatherDescription = data.weather[0].description;
			$scope.weatherIcon = data.weather[0].icon;
			//console.log($scope.weatherMain);
			//console.log($scope.weatherIcon);

			// Wind
			$scope.windDeg = $cityWind.getWindDeg(data);
			$scope.windSpeed = $cityWind.getWindSpeed(data);

		// Forecast on 5 days
		$scope.fiveDays = function (city,country) {
			city = $scope.cityName;
			country = $scope.country;
			var urlSearch = "http://api.openweathermap.org/data/2.5/forecast?q="+city+","+country+"&appid=46b046bae99b8acf09f160a1749f3c9b";
			$requesterApi.fiveDays(urlSearch).then(function(data) {
					//$scope.days = data.list;
					$scope.days = [];

					for (var i = 0; i < 40; i+=8) {
						var day = data.list[i];
						$scope.days.push(day);
						console.log($scope.days);
					}
					//$scope.day1 = data.list[8];
					
					//console.log($scope.day1);
				})
			}
			
		});
	}

	
}]);

