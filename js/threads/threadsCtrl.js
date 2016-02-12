angular.module('rtfmApp').controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, userSvc){
    
    var firebaseRef = new Firebase("https://therealtimeforum.firebaseio.com/");
    
    $scope.username = userSvc.getUser();
   
    $scope.threads = $firebaseArray(threadsRef);
    
    $scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

    $scope.createThread = function (username, title) {
      $scope.threads.$add({
        username: username,
        title: title
      });

    };
    
    
})