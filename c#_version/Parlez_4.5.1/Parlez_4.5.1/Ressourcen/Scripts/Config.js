app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: '/Login/LoginView',
			controller: 'LoginCtrl'
		})
		.when('/register', {
			templateUrl: '/Register/RegisterView',
			controller: 'RegisterCtrl'
		})
		.otherwise({
			templateUrl: '/StartPage/StartPageView',
			controller: 'HomeCtrl'
		});
}]);

app.constant('linksConst', [
    {
        name: 'Home',
        value: 'home'
    },
	{
		name: 'Register',
		value: 'register'
	},
    {
    	name: 'Login',
    	value: 'login'
    }
]);