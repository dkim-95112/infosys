function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $mdIconProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  });

  $urlRouterProvider.otherwise('/');

    $mdIconProvider.icon('menu', './images/menu.svg', 24);
  console.log('finished OnConfig');
}

export default OnConfig;
