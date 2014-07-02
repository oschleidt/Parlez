app.controller('InviteCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.invite = function (target) {
    	$http({
    		method: 'POST',
    		url: 'SendMail/SendMail',
    		data: "target=" + target,
    		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    	}).
			success(function (data, status, headers, config) {
				alert(data.target);
			}).
			error(function (data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			});
    };
}]);