angular.module("app")
  .service("SongsSvc", function($http){

    this.getAll = function(){
      return $http.get("/api/songs");
    }

    this.getOne = function(id){
      return $http.get("/api/songs/"+id);
    }

    this.create = function(song){
      return $http.post("/api/songs/create", song);
    }

    this.update = function(song){
      return $http.post("/api/songs/" + song.id + "/update", song);
    }

    this.destroy = function(id){
      return $http.delete("/api/songs/" + id);
    }

  });
