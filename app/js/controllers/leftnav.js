function LeftNavCtrl($mdSidenav) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'LeftNavCtrl';
  vm.toggleSideNav = function() {
    $mdSidenav('left').toggle();
    console.log('in toggleSideNav');
  };

}

export default {
  name: 'LeftNavCtrl',
  fn: LeftNavCtrl
};
