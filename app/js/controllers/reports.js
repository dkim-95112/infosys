function ReportsCtrl($scope) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'ReportsCtrl';
  console.log('in ReportsCtrl');

  $scope.tsv = [
    'letter	frequency',
    'A	.08167',
    'B	.01492',
    'C	.02782',
    'D	.04253',
    'E	.12702'
  ].join('\n');

}

export default {
  name: 'ReportsCtrl',
  fn: ReportsCtrl
};
