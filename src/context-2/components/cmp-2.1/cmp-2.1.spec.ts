import {contextTwo} from '../../index';

describe('component 2.1', () => {

  let $scope: any;
  let element: JQuery;

  beforeEach(angular.mock.module(contextTwo));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    $scope = $rootScope.$new();
    element = $compile('<component-two-one></component-two-one>')($scope);
    $scope.$digest();
  }));

  it('sets a selected item when clicked', () => {
    const selected = element.find('.selected-item');
    expect(selected).toBeEmpty();
    element.find('*:contains("Alpha")').click();
    expect(selected).toContainText('Alpha');
  });
});