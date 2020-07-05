angular.module("app")
  .controller("SongsCtrl", function ($scope, SongsSvc, $routeParams){

    $scope.getSongs = function(){
      SongsSvc.getAll().success(function(songs){
        $scope.songs = songs;
      });
    };

    $scope.getSong = function(){
      id = $routeParams.id
      SongsSvc.getOne(id).success(function(song){
        $scope.song = song;
        if($scope.action == "update"){
          $scope.id = $scope.song._id
          $scope.title = $scope.song.title
          $scope.note = $scope.song.note
        }
      })
    }

    $scope.newSong = function(){
      $scope.action = "create";
    }

    $scope.createSong = function(){
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

    $scope.editSong = function(){
      $scope.action = "update"
      $scope.getSong()
    }

    $scope.updateSong = function(){
      if($scope.title){
        SongsSvc.update({
          id: $scope.id,
          title: $scope.title,
          note: $scope.note
        }).success(function(song){
          window.location.hash = "/songs/" + song._id;
        });
        $scope.id = "";
        $scope.title = "";
        $scope.note = "";
      }
    }

    $scope.submit = function(action){
      switch (action) {
        case "create":
          $scope.createSong();
          break;
        case "update":
          $scope.updateSong();
          break;
      }
    }

  });
