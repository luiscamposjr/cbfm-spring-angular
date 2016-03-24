'use strict';

angular.module(GLOBAL.nameApp).factory("loginService", function ($http, $resource, Cookies, toaster) {

	var loginResources = $resource('http://localhost:8080/login', {}, {
		options: {method: 'OPTIONS', cache: false}
	});

	var logoutResources = $resource('http://localhost:8080/logout', {}, {
		options: {method: 'OPTIONS', cache: false}
	});

	/**
	 * Detect whether the response elements returned indicate an invalid or missing CSRF token...
	 */
	var isCSRFTokenInvalidOrMissing = function (data, status) {
		return (status === 403 && data.message && data.message.toLowerCase().indexOf('csrf') > -1) || (status === 0 && data === null);
	};


    var _login = function (username, password, successHandler, errorHandler) {
      
		// Obtain a CSRF token
		loginResources.options().$promise.then(function () {
			//console.log('Obtained a CSRF token in a cookie', response);

			// Extract the CSRF token
			var csrfToken = Cookies.getFromDocument($http.defaults.xsrfCookieName);
			//console.log('Extracted the CSRF token from the cookie', csrfToken);

			// Prepare the headers
			var headers = {
				'Content-Type': 'application/x-www-form-urlencoded'
			};
			headers[$http.defaults.xsrfHeaderName] = csrfToken;

			// Post the credentials for logging in
			$http.post('http://localhost:8080/login', 'username=' + username + '&password=' + password, {
				headers: headers
			})
				.success(successHandler)

				.error(function (data, status, headers, config) {

					if (isCSRFTokenInvalidOrMissing(data, status)) {
						toaster.pop('error', 'Atenção', 'Falha ao logar. Necessário ativar s Cookies.', 3000);

					} else {
						errorHandler(data, status, headers, config);
					}
				});

		}).catch(function() {
			toaster.pop('error', 'Atenção', 'Não foi possível a conexão com o servidor.', 3000);
		});

    };

    var _logout = function (successHandler, errorHandler){

		// Obtain a CSRF token
		logoutResources.options().$promise.then(function () {
			// console.log('Obtained a CSRF token in a cookie', response);

			// Extract the CSRF token
			var csrfToken = Cookies.getFromDocument($http.defaults.xsrfCookieName);
			// console.log('Extracted the CSRF token from the cookie', csrfToken);

			// Prepare the headers
			var headers = {
				'Content-Type': 'application/x-www-form-urlencoded'
			};
			headers[$http.defaults.xsrfHeaderName] = csrfToken;

			// Post the credentials for logging out
			$http.post('http://localhost:8080/logout', '', {
				headers: headers
			})
				.success(successHandler)
				.error(function(data, status, headers, config) {

					if (isCSRFTokenInvalidOrMissing(data, status)) {
						toaster.pop('error', 'Atenção', 'Falha ao logar. Necessário ativar s Cookies.', 3000);

					} else {
						errorHandler(data, status, headers, config);
					}
				});

		}).catch(function() {
			toaster.pop('error', 'Atenção', 'Não foi possível a conexão com o servidor.', 3000);
		});


    };

  return {
    login: _login,
    logout: _logout
  };
});
