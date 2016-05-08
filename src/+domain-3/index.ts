import {LayoutThreeAComponent} from './layout-3a/layout-3a.component';
import {PageThreeOneComponent} from './page-3.1/page-3.1.component';
import {PageThreeTwoComponent} from './page-3.2/page-3.2.component';
import {ThreeOneService} from './services/serv-3.1.service';

const module = angular.module('govuk-angularjs-boilerplate.domain-3', [])

  .component('layoutThreeA',  LayoutThreeAComponent)
  .component('pageThreeOne', PageThreeOneComponent)
  .component('pageThreeTwo', PageThreeTwoComponent)
  .service('ThreeOneService', ThreeOneService);

export const domainThree: string = module.name;