import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import 'angular-material';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'ngMaterial',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

window.app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
    this.name = 'mainCtrl';
    console.log('in mainCtrl');

    function tick(){
      $scope.time = new Date();
      $timeout(tick, 1000);
    }
    tick();
  }]);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
