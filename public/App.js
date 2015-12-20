var App = angular.module('BoilerApp', [])
.config(function($routeProvider){

      $stateProvider

        .state('home', {
        url: '/',
        abstract: true,
        templateUrl: '',  //a view goes here
        controller: 'MainCtrl'
      })


    });

});
