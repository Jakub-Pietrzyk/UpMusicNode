angular.module("app")
  .config(function ($routeProvider){
    $routeProvider
      .when("/dashboard", {controller: "DashboardCtrl", templateUrl: "users/dashboard.html"})
      .when("/songs", {controller: "SongsCtrl", templateUrl: "songs/index.html"})
      .when("/songs/new", {controller: "SongsCtrl", templateUrl: "songs/new.html"})
      .when("/songs/:id", {controller: "SongsCtrl", templateUrl: "songs/show.html"})
  });
