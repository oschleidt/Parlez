app.controller('ChatCtrl', ['$scope', 'chatConnectionService', function ($scope, chatConnectionService) {
	var chatConnection = chatConnectionService.init($scope);
	var username = chatConnection.getUsername();
	var receiver = [];
	$scope.isSelected = [];

	if (!username) {
		username = prompt('Nutzername');
		chatConnection.setUsername(username);
	}

	$scope.$watch(function () { return chatConnection.getOnlineUsers(); }, function () {
		$scope.users = chatConnection.getOnlineUsers();
	});

	$scope.$watch(function () { return chatConnection.getMessages(); }, function () {
		$scope.messages = chatConnection.getMessages();
	});

	$scope.$on('connectionEstablished', function () {
		chatConnection.regMe();
	});

	$scope.sendMessage = function () {
		chatConnection.displayMessage("GESENDET: " + username, $('#messageText').val())
		if (receiver.length == 0) {
			chatConnection.sendPublicMessage($('#messageText').val());
		} else {
			chatConnection.sendPrivateMessage(receiver, $('#messageText').val());
		}
	};

	$scope.toggleSelected = function (index, connectionId) {
		if (receiver.indexOf(connectionId) == -1) {
			receiver.push(connectionId);
		} else {
			receiver.splice(receiver.indexOf(connectionId));
		}
		$scope.isSelected[index] = $scope.isSelected[index] == 'userSelected' ? '' : 'userSelected';
	};
}]);