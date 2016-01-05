var App = angular.module('BoilerApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

      $stateProvider

        .state('home', {
        url: '/',
        abstract: true,
        templateUrl: '',  //a view goes here
        controller: 'MainCtrl'
      })


    });


