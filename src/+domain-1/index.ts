import { PageOneOneComponent } from './page-1.1.component';

const module = angular.module('govuk-angularjs-boilerplate.domain-1', [])

  .component('pageOneOne', PageOneOneComponent);

export const domainOne: string = module.name;