angular.module("app")
  .controller("ApplicationCtrl", function ($scope, UserSvc){
    
    //$on jest odpowiedzią na $emit od jakiegoś podrzędnego controllera
    $scope.$on('login', function(_, user){
      //parametr którego nie chcemy używać nazywamy jako '_'
      $scope.currentUser = user;
    })

    $scope.checkToken = function(){
      UserSvc.setToken().then(function(response){
        if(response) $scope.currentUser = response.data;
      })
    }

    $scope.logOut = function(){
      $scope.currentUser = null;
      UserSvc.logOut();
    }
  });
