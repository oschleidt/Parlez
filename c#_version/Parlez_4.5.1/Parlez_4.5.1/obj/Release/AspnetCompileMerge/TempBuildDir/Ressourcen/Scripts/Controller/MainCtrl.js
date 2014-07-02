var app = angular.module('ChatApp', ['ngRoute']);

app.controller('MainCtrl', ['$scope', '$compile', 'linksConst', function ($scope, $compile, linksConst) {
	$scope.links = linksConst;

	$scope.setPage = function (hash) {
		document.location.hash = hash;
	};
}]);