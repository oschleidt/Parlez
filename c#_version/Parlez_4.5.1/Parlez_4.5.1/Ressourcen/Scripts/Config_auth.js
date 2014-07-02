app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/logout', {
			templateUrl: '/Login/LoginView',
			controller: 'LoginCtrl'
		})
		.when('/chat', {
			templateUrl: '/Chat/ChatView',
			controller: 'ChatCtrl'
		})
		.when('/invite', {
			templateUrl: '/EmailSenden/EmailSendenView',
			controller: 'InviteCtrl'
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
        name: 'Kontakte',
        value: 'invite'
    },
	{
		name: 'Chat',
		value: 'chat'
	},
    {
    	name: 'Logout',
    	value: 'logout'
    }
]);