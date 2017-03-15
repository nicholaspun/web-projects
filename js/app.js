var webfun = angular.module('webfun', ['ngAnimate', 'ngMaterial', 'ui.router']);

webfun.config(["$stateProvider", function($stateProvider) {
  $stateProvider
  .state('contacts', {
    template: '<h1>My Contacts</h1>'
  })

}]);
