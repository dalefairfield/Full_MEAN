var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
  $routeProvider
  .when('/',{
      templateUrl: 'partials/index.html',
      controller: 'indexController'
  })
    .when('/new',{
        templateUrl: 'partials/new.html',
        controller: 'newController'
    })
    .when('/edit/:id',{
        templateUrl: 'partials/edit.html',
        controller: 'editController'
    })
    .when('/show/:id',{
        templateUrl: 'partials/show.html',
        controller: 'showController'
    })
    .when('/delete/:id',{
        templateUrl: 'partials/index.html',
        controller: 'indexController'
    })

    .otherwise({
      redirectTo: '/'
    });
});
