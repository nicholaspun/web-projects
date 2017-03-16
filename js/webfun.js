(function() {
  'use strict';

  angular
    .module('webfun')
    .controller('MainController', MainController);

    MainController.$inject = ["$scope", "$timeout", "$state"];

  function MainController($scope, $timeout, $state){

    var vm = this;

    vm.inputStr = null;
    vm.toggle = 0;
    vm.searching = false;

    vm.basicCommands = ["resume", "about me", "contact nick"].sort();

    vm.search = function() {
      vm.searching = true;
      var searchItem = vm.inputStr.toLowerCase();
      vm.toggle = 0;
      $timeout(function() {
        if (doesStateExist(searchItem)) {
          $state.go(searchItem);
          $timeout(function() {
            vm.toggle = 1;
          }, 115)
        }
        vm.searching = false;
      }, 300);
    }

    vm.erase = function() {
      vm.inputStr = "";
    }

    function doesStateExist(stateName) {
      if (stateName === "") return false;
      var allStates = $state.get().map( function(e){ return e.name; });
      return allStates.includes(stateName);
    }


    // Runs on load --> Intro Text
    $scope.$watch('vm.introText', function() {
      Typed.new('[placeholder]', {
        strings: ["Welcome!"],
        typeSpeed: 0
      });
      $timeout(function() {
        vm.toggle = 2;
      }, 1000);
    })
  }

})();
