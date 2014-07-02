app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/testlogin', {
			templateUrl: '/Testlogin/TestloginView',
			controller: 'TestloginCtrl'
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
    	name: 'TestLogin',
    	value: 'testlogin'
    },
	{
		name: 'Chat',
		value: 'chat'
	}
]);