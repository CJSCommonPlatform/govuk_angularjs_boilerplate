import { shared } from '../../index';

describe('alpha component', () => {

  let $scope: any;
  let element: JQuery;

  beforeEach(angular.mock.module(shared));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    $scope = $rootScope.$new();
    $scope.model = {propOne: 'foo'};
    element = $compile('<alpha model="model"></alpha>')($scope);
    $scope.$digest();
  }));

  it('includes a filtered model', () => {
    expect(element.find('p')).toContainText('foo (filtered by deltaFilter)');
  });
});