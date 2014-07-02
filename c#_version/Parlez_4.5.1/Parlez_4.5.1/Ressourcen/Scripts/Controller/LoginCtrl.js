app.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.login = function (username, password) {
		$http({
			method: 'POST',
			url: '/LoginAPI/Login',
			data: "username=" + username + "&password=" + password,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).
			success(function (data, status, headers, config) {
				location.reload();
			}).
			error(function (data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	};

	$scope.logout = function () {
		$http({
			method: 'POST',
			url: '/LogoutAPI/Logout',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).
			success(function (data, status, headers, config) {
				location.reload();
			}).
			error(function (data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	};
}]);