angular.module('BoilerApp').directive('OneDirective', function(){

  return {
    templateUrl:"",
    controller: 'OneCtrl',
    controllerAs: "is",
    bindToController: true,
    attribute: 'E',
    scope: {
      props: "="
    }
  }


})
