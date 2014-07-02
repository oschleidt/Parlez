app.factory('chatConnectionService', function () {
	var _initDn = false;
	var _messages = [];
	var result;

	var _init = function (scope) {
		if (!_initDn) {
			_initDn = true;

			var _connection = $.hubConnection();
			var _testHub = _connection.createHubProxy('chatConnectionHub');

			var _connected = false;
			var _onlineUsers = "";
			var _username;

			var _regMe = function () {
				if (_connected)
					_testHub.invoke('regMe', _username);
			};

			var _sendPublicMessage = function (text) {
				if (_connected)
					_testHub.invoke('sendPublicMessage', _username, text);
			};

			var _sendPrivateMessage = function (receiver, text) {
				if (_connected)
					_testHub.invoke('sendPrivateMessage', "PRIVAT: " + _username, receiver, text);
			};

			_testHub.on('updateOnlineUsers', function (onlineUsers) {
				_onlineUsers = onlineUsers;
				scope.$apply();
			});

			_testHub.on('displayMessage', function (sender, text) {
				_displayMessage(sender, text);
			});

			var _displayMessage = function (sender, text) {
				_messages.push({ sender: sender, text: text });
				scope.$apply();
			};

			_connection.start().done(function () {
				_connected = true;
				scope.$broadcast('connectionEstablished');
			});

			var _setUsername = function (username) {
				_username = username;
			};

			var _getUsername = function () {
				return _username;
			};

			result = {
				getOnlineUsers: function () { return _onlineUsers; },
				getMessages: function () { return _messages; },
				regMe: _regMe,
				sendPublicMessage: _sendPublicMessage,
				sendPrivateMessage: _sendPrivateMessage,
				setUsername: _setUsername,
				getUsername: _getUsername,
				displayMessage: _displayMessage
			};
		}
		return result;
	}

	return {
		init: _init
	};
});