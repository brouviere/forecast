mainApp.factory('cityTemperature', function ($filter) {
	return {
		'getTemperature': function (cityData) {
			newTemperature = $filter('tempToCelsius')(cityData.main.temp, 1);
			return newTemperature;
		}
	}
});