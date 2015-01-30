'use strict';

/**
 * @ngdoc function
 * @name xampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xampApp
 */
angular.module('xampApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
