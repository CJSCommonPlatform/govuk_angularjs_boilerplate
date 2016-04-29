import {ComponentThreeOne} from './cmp-3.1/cmp-3.1';
import {ComponentThreeTwo} from './cmp-3.2/cmp-3.2';
import {ServiceThreeOne} from './services/service-3.1';

const module = angular.module('ngGovExample.context-3', [])

  .component('componentThreeOne', ComponentThreeOne)
  .component('componentThreeTwo', ComponentThreeTwo)
  .service('ServiceThreeOne', ServiceThreeOne);

export const contextThree: string = module.name;