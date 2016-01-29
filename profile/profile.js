angular.module('profile', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('profile').config(function($stateProvider) {

    $stateProvider.state('profile-partial', {
        url: '/profile',
        templateUrl: 'profile/profile-partial/profile-partial.html'
    });
    /* Add New States Above */

});

