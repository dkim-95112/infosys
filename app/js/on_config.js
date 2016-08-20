function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $mdIconProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html'
  })
  .state('Reports', {
    url: '/reports',
    controller: 'ReportsCtrl as reports',
    templateUrl: 'reports.html'
  });

  $urlRouterProvider.otherwise('/');

    $mdIconProvider.icon('menu', './images/menu.svg', 24);
  console.log('finished OnConfig');
}

export default OnConfig;
