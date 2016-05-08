import {domainTwo} from '../index';

describe('pageTwoOne component', () => {

  let $scope: any;
  let element: JQuery;

  beforeEach(angular.mock.module(domainTwo));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    $scope = $rootScope.$new();
    element = $compile('<page-two-one></page-two-one>')($scope);
    $scope.$digest();
  }));

  it('sets a selected item when clicked', () => {
    const selected = element.find('.selected-item');
    expect(selected).toContainText('n/a');
    element.find('*:contains("Alpha")').click();
    expect(selected).toContainText('Alpha');
  });
});