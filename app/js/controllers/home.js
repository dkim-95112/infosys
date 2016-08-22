function HomeCtrl() {

  // ViewModel
  const vm = this;

  vm.title = 'HomeCtrl';
  console.log('in HomeCtrl');

  vm.dashboard = [{
    text: 'angular',
    src: 'images/angular.png'
  }, {
    text: 'gulp',
    src: 'images/gulp.png'
  }, {
    text: 'browserify',
    src: 'images/browserify.png'
  }];
}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
