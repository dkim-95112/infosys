function HomeCtrl() {

  // ViewModel
  const vm = this;

  vm.title = 'HomeCtrl';
  vm.number = 1234;
  console.log('in HomeCtrl');
}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
