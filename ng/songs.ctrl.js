angular.module("app")
  .controller("SongsCtrl", function ($scope, SongsSvc, $routeParams){

    $scope.getSongs = function(){
      SongsSvc.getAll().success(function(songs){
        $scope.songs = songs;
      });
    };

    $scope.addSong = function(){
      if($scope.title){
        SongsSvc.create({
          title: $scope.title,
          note: $scope.note
        }).success(function(song){
          window.location.hash = "/songs";
        });
        $scope.title = "";
        $scope.note = "";
      }
    };

    $scope.getSong = function(){
      id = $routeParams.id
      SongsSvc.getOne(id).success(function(song){
        $scope.song = song;
      })
    }
  });
