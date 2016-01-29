angular.module('login').controller('LoginPartialCtrl',function($scope){

	$scope.user = {
		identity: '',
		key: ''
	};

	$scope.remember = false;

    $scope.login = function() {
        console.log($scope.user);
    };
});
