import { domainTwo } from '../index';

describe('twoOneFilter filter', () => {

  let filter: Function;

  beforeEach(angular.mock.module(domainTwo));

  beforeEach(inject((twoOneFilterFilter: Function) => filter = twoOneFilterFilter));

  it('appends a filtered notification to the passed model', () => {
    expect(filter('foo')).toEqual('foo (filtered by twoOneFilter)');
  });
});