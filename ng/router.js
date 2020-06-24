angular.module("app")
  .config(function ($routeProvider){
    $routeProvider
      .when("/dashboard", {controller: "DashboardCtrl", templateUrl: "users/dashboard.html"})
  });
