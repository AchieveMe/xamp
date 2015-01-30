'use strict';

/**
 * @ngdoc function
 * @name xampApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xampApp
 */
angular.module('xampApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
