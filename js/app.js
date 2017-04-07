var webfun = angular.module('webfun', ['ngAnimate', 'ngMaterial', 'ui.router']);

webfun.config(["$stateProvider", function($stateProvider) {
  $stateProvider
  .state('test', {
    templateUrl: "./stateTemplates/test.html"
  })
  .state('hello world', {
    templateUrl: "./stateTemplates/helloWorld.html"
  })
  .state('blank', {
    templateUrl: "./stateTemplates/blank.html"
  })
  .state('about me', {
    templateUrl: "./stateTemplates/aboutMe.html"
  })
  .state('contact nick', {
    templateUrl: "./stateTemplates/contactNick.html"
  })
  .state('resume', {
    templateUrl: "./stateTemplates/resume.html"
  })
  .state('github', {
    controller: 'githubController',
    controllerAs: 'ctrl',
    templateUrl: "./stateTemplates/github.html"
  })

}]);
