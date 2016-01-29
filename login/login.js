angular.module('login', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('login').config(function($stateProvider) {
	
    $stateProvider.state('login-partial', {
        url: '/login',
        templateUrl: 'login/login-partial/login-partial.html'
    });
    /* Add New States Above */

});

