import { shared } from '../index';

describe('beta directive', () => {

  let scope: any;
  let element: any;

  beforeEach(angular.mock.module(shared));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
    scope.model = 1;
    element = $compile('<input type="text" ng-model="model" beta>')(scope);
    scope.$digest();
  }));

  it('marks a model valid when the model value is an odd number', () => {
    const ngModel = element.controller('ngModel');
    scope.model = 1;
    scope.$digest();
    expect(ngModel.$valid).toBe(false);
    scope.model = 2;
    scope.$digest();
    expect(ngModel.$valid).toBe(true);
  });
});