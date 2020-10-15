angular.module('app')
    .controller('RegisterCtrl', function($scope, UserSvc, $location){
        $scope.register = function(name, surname, email, password){
            UserSvc.register({name: name, surname: surname, email: email, password: password})
                .then(function(response){
                    if(response.status == 201){
                        UserSvc.login(email, password)
                            .then(function(response){
                                $scope.$emit('login', response.data)
                                $location.path('/')
                            })
                    }
                })
        }
    })