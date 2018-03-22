// TODO - This doesn't work

(function() {
  'use strict';

  angular
    .module('webfun')
    .controller('githubController', githubController);

    githubController.$inject = ['$scope'];

  function githubController($scope){

    /*jshint validthis: true */
    var vm = this;

    $http.get('https://api.github.com/users/nicholaspun/repos').then(
      function(data) {
        console.log(data);
      }
    )


  }

})();
