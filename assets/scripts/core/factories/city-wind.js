mainApp.factory('cityWind', function ($filter) {
	return {
		'getWindDeg': function (cityData) {
			newWindDeg = cityData.wind.deg;
			return (newWindDeg) ;
		},
		'getWindSpeed': function (cityData) {
			newWindSpeed = cityData.wind.speed;
			return (newWindSpeed) ;
		}
	}
});