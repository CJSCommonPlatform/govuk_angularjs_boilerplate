import { TwoOneComponent } from './components/cmp-2.1/cmp-2.1.component';
import { PageTwoOneComponent } from './page-2.1/page-2.1.component';
import { twoOneFilter } from './filters/fltr-2.1.filter';

const module = angular.module('govuk-angularjs-boilerplate.domain-2', [])

  .component('twoOne', TwoOneComponent)
  .component('pageTwoOne', PageTwoOneComponent)
  .filter('twoOneFilter', twoOneFilter);

export const domainTwo: string = module.name;