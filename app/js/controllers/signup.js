function SignupCtrl($scope) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'SignupCtrl';
  $scope.save = function() {

    console.log('in save');
  };

  console.log('in SignupCtrl');
}

export default {
  name: 'SignupCtrl',
  fn: SignupCtrl
};
