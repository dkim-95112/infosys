function SignupCtrl($scope, $http) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.title = 'SignupCtrl';
  $scope.formData = {};

  $scope.save = function() {

    $http({
      method: 'POST',
      url: '/api/users',
      data: $scope.formData,
      responseType: 'json'
    }).then( function(resp){
      debugger
    });
    console.log('in save');
  };

  console.log('in SignupCtrl');
}

export default {
  name: 'SignupCtrl',
  fn: SignupCtrl
};
