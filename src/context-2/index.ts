import {ComponentTwoOne} from './components/cmp-2.1/cmp-2.1';
import {ComponentTwoTwo} from './components/cmp-2.2/cmp-2.2';
import {filterTwoOne} from './filters/filter-2.1';

const module = angular.module('ngGovExample.context-2', [])

  .component('componentTwoOne', ComponentTwoOne)
  .component('componentTwoTwo', ComponentTwoTwo)
  .filter('filterTwoOne', filterTwoOne);

export const contextTwo: string = module.name;