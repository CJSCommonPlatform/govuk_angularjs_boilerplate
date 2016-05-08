import { shared } from '../index';
import { ThetaService } from './theta.service';

describe('ThetaService', () => {

  let promiseValue: any;
  let $httpBackend: ng.IHttpBackendService;
  let service: ThetaService;

  beforeEach(angular.mock.module(shared));

  beforeEach(inject((_$httpBackend_: ng.IHttpBackendService, _ThetaService_: ThetaService) => {
    $httpBackend = _$httpBackend_;
    service      = _ThetaService_;
    promiseValue = null;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  function setPromiseValue(result: any) {
    promiseValue = result;
  }

  describe('#findOne', () => {

    it('fetches a model belonging to the passed id', () => {
      $httpBackend.expectGET('/models/5').respond({id: 5});
      service.findOne(5).then(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue).toEqual({id: 5});
    });

    it('returns the http error when the call fails', () => {
      $httpBackend.whenGET('/models/5').respond(400, {message: 'error!'});
      service.findOne(5).catch(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue).toEqual({message: 'error!'});
    });
  });

  describe('#create', () => {

    it('creates a model using the passed arguments', () => {
      $httpBackend.expectPOST('/models', {value1: 'value1', value2: 'value2'}).respond({ok: true});
      service.create('value1', 'value2').then(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue).toEqual({ok: true});
    });

    it('creates a model using the passed arguments', () => {
      $httpBackend.expectPOST('/models', {
        value1: 'value1',
        value2: 'value2'
      }).respond(400, {message: 'error!'});
      service.create('value1', 'value2').catch(setPromiseValue);
      $httpBackend.flush();
      expect(promiseValue).toEqual({message: 'error!'});
    });
  });
});