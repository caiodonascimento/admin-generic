angular.module('dashboard', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('dashboard').config(function($stateProvider) {

    $stateProvider.state('dashboard-partial', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard-partial/dashboard-partial.html'
    });
    /* Add New States Above */

});

