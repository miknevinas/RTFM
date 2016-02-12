angular.module('rtfmApp').service('userSvc', function(fb, $firebaseAuth,$state){
    
    var authRef = $firebaseAuth(new Firebase(fb.url));
    /*var usersRef = $firebaseAuth(new Firebase(fb + '/users'));*/
    
    this.getUser = function() {
        return authRef.$getAuth();
    }
    
    this.login = function(email, password) {
        authRef.$authWithPassword({email: email, password: password}).then(function(authData){
            console.log("login successful", authData);
            $state.go('threads');
        }).catch(function(err) {
            console.log("login error", err)
        })
    }
    
    this.register = function(email, password) {
        authRef.$createUser({email: email, password: password}).then(function(newUser){
            console.log("User created", newUser);
            $state.go('login');
        }).catch(function(err){
            consle.log(err);
        })
    }
})