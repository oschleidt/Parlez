app.controller('RegisterCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.register = function (username, password) {
		$http({
			method: 'POST',
			data: 'username=' + username + '&password=' + password,
			url: '/RegisterAPI/Register',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).
			success(function (data, status, headers, config) {
				if (data.success)
				{
					alert('Erfolgreich registriert');
				}
				location.reload();
			}).
			error(function (data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	};
}]);