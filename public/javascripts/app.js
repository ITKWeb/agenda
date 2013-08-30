var app = angular.module('app', []);

app.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/agenda.html',
        controller: "AgendaController"
      })
      .when('/logged/:projectId', {
        templateUrl: 'views/logged.html',
        controller: "LoggedController"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
