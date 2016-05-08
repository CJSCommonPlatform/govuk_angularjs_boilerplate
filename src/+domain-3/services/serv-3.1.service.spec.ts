import { domainThree } from '../index';
import { ThreeOneService } from './serv-3.1.service';

describe('ThreeOneService', () => {

  let service: ThreeOneService;
  let timeout: ng.ITimeoutService;
  let promiseValue: any;

  beforeEach(angular.mock.module(domainThree));

  beforeEach(inject((ThreeOneService: ThreeOneService, $timeout: ng.ITimeoutService) => {
    service = ThreeOneService;
    timeout = $timeout;
    promiseValue = null;
  }));

  function setPromiseValue(data) {
    promiseValue = data;
  }

  describe('#doSomething', () => {

    it('resolves to a list of values after 2 seconds', () => {
      service.doSomething().then(setPromiseValue);
      timeout.flush(1999);
      expect(promiseValue).toBe(null);
      timeout.flush(1);
      expect(promiseValue).toEqual(['async', 'values']);
    });
  });
});