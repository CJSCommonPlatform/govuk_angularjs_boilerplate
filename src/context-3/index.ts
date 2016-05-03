import {LayoutComponentThree} from './layout-3a/layout-cmp-3';
import {PageComponentThreeOne} from './page-3.1/page-cmp-3.1';
import {PageComponentThreeTwo} from './page-3.2/page-cmp-3.2';
import {ServiceThreeOne} from './services/service-3.1';

const module = angular.module('ngGovExample.context-3', [])

  .component('layoutComponentThree',  LayoutComponentThree)
  .component('pageComponentThreeOne', PageComponentThreeOne)
  .component('pageComponentThreeTwo', PageComponentThreeTwo)
  .service('ServiceThreeOne', ServiceThreeOne);

export const contextThree: string = module.name;