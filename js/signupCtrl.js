angular.module('rtfmApp').controller('signupCtrl', function($scope, userSvc){
    
    $scope.register = function(email, password) {
        userSvc.register(email, password);
    }
    
})