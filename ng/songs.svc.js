angular.module("app")
  .service("SongsSvc", function($http){

    this.getAll = function(){
      return $http.get("/api/songs");
    }

    this.create = function(song){
      return $http.post("/api/songs/create", song);
    }

  });
