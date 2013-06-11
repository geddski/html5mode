angular.module('app', [])
  .config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {templateUrl: '/templates/home.html', controller: 'Home'});
    $routeProvider.when('/user', {templateUrl: '/templates/user.html', controller: 'User'});
    $routeProvider.when('/pick/color', {templateUrl: '/templates/color.html', controller: 'Color'});
  })
  .controller('Home', function($scope){
    $scope.name = "home page";
  })
  .controller('User', function($scope){
    $scope.name = "user page";
  })
  .controller('Color', function($scope){
    $scope.name = "pick a color";
  });