(function() {
  'use strict';

  angular
    .module('webfun')
    .controller('MainController', MainController);

    MainController.$inject = ["$scope", "$timeout", "searchService", "$state"];

  function MainController($scope, $timeout, searchService, $state){

    var vm = this;

    vm.inputStr = null;
    vm.output = null;

    vm.toggle = 0;
    vm.searching = false;

    vm.search = function() {
      vm.searching = true;
      var searchItem = vm.inputStr.toLowerCase();
      vm.toggle = 0;
      $timeout(function() {
        vm.output = searchService.getReturnStr(searchItem);
        vm.toggle = vm.output ? 1 : 0;
        vm.searching = false;
      }, 300);
    }

    $state.go('contacts');

  }

})();
