'use strict';

/**
 * @ngdoc overview
 * @name jeromeramosinfoApp
 * @description
 * # jeromeramosinfoApp
 *
 * Main module of the application.
 */
angular
  .module('jeromeramosinfoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
