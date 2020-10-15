angular.module("app")
  .config(function ($routeProvider){
    $routeProvider
      .when("/", {controller: "DashboardCtrl", templateUrl: "users/dashboard.html"})
      .when("/songs", {controller: "SongsCtrl", templateUrl: "songs/index.html"})
      .when("/songs/new", {controller: "SongsCtrl", templateUrl: "songs/new.html"})
      .when("/songs/:id", {controller: "SongsCtrl", templateUrl: "songs/show.html"})
      .when("/songs/:id/edit", {controller: "SongsCtrl", templateUrl: "songs/edit.html"})
      .when("/register", {controller: "RegisterCtrl", templateUrl: "users/register.html"})
      .when("/login", {controller: "LoginCtrl", templateUrl: "users/login.html"})
  });
