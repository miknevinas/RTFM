angular.module('rtfmApp', ['ui.router', 'firebase'])
    
    .constant('fb', {
       url: 'https://therealtimeforum.firebaseio.com/'
    })
    
    
    
    .config(function($stateProvider, $urlRouterProvider) {
    
     $stateProvider
        .state('login', {
         url: '/login',
         templateUrl: 'login.html',
         conroller: 'loginCtrl'
     })
     .state('signup', {
         url: '/signup',
         templateUrl: 'signup.html',
         conroller: 'signupCtrl'
     })
        .state('threads', {
            url: '/threads',
            templateUrl: 'js/threads/threads.html',
            controller: 'threadsCtrl',
            resolve: {
                threadsRef: function(threadService) {
                 return threadService.getThreads();
               }
            }
        })
         .state('thread', {
            url: '/threads/:threadId',
            templateUrl: 'js/thread/thread.html',
            controller: 'threadCtrl',
            resolve: {
             threadRef: function (threadService, $stateParams) {
                   return threadService.getThread($stateParams.threadId);
            },
                commentsRef: function (threadService, $stateParams) {
                    return threadService.getComments($stateParams.threadId);
            }
           }
        })

     $urlRouterProvider
         .otherwise('/threads');
    
});