angular.module('rtfmApp').controller('loginCtrl', function($scope, userSvc){
    
    $scope.login = function(email, password) {
        userSvc.login(email, password);
    }
})