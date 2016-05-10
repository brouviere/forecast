mainApp.controller('HomeController', ['$scope','$http', '$q', '$filter', 'requestApi', 'cityTemperature', 'cityWind', function($scope,$http,$q,$filter,$requesterApi, $cityTemperature,$cityWind) {


	$scope.searchCity = function (city) {
		var urlSearch = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=46b046bae99b8acf09f160a1749f3c9b";
		$requesterApi.newRequest(urlSearch).then(function(data) {
			//console.log(data);

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

			
		});
	}
}]);

