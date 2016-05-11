mainApp.service('requestApi', function ($http, $q) {
	this.singleCity = function(urlSearch) {
		//  Initialisation du service "query" => Declaration de la promise
		var myDefer = $q.defer();
		
		$http({
			method: 'GET',
			url: urlSearch
		}).then(function success(response) {
			myDefer.resolve(response.data);
			//console.log(response.data);
		}, function error(response) {
				return false;
		});
		return myDefer.promise;
	},
	this.fiveDays = function(urlSearch) {
		var myDefer = $q.defer();

		$http({
			method: 'GET',
			url: urlSearch
		}).then(function success(response) {
			myDefer.resolve(response.data);
			//console.log(response.data);
		}, function error(response) {
				return false;
		});
		return myDefer.promise;
	}
});