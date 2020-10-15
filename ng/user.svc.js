angular.module('app')
    .service('UserSvc', function($http, $window){
        var svc = this;

        svc.getUser = function(){
            return $http.get('/api/users')
        }

        svc.register = function(user){
            return $http.post('/api/users', user)
        }
        
        svc.login = function(email, password){
            return $http.post('/api/sessions', {email: email, password: password})
                .then(function(val){
                    $window.localStorage["jwt"] = val.data
                    $http.defaults.headers.common["X-Auth"] = $window.localStorage["jwt"]
                    return svc.getUser();
                })
        }

        svc.setToken = function(){
            if($window.localStorage['jwt'])  $http.defaults.headers.common["X-Auth"] = $window.localStorage["jwt"]
            return svc.getUser();
        }

        svc.logOut = function(){
            $window.localStorage['jwt'] = "";
            $http.defaults.headers.common["X-Auth"] = undefined;
        }
    })