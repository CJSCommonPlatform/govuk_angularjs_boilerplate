import { shared } from '../index';

describe('filter-a', () => {

  let filter: Function;

  beforeEach(angular.mock.module(shared));

  beforeEach(inject((deltaFilter: Function) => filter = deltaFilter));

  it('appends a filtered notification to the passed model', () => {
    expect(filter({propOne: 'foo'})).toEqual('foo (filtered by deltaFilter)');
  });
});