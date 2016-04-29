import {ComponentFourOne} from './cmp-4.1/cmp-4.1';
import {ComponentFourTwo} from './nsp/cmp-4.2/cmp-4.2';
import {ComponentFourThree} from './nsp/cmp-4.3/cmp-4.3';

const module = angular.module('ngGovExample.context-4', [])

  .component('componentFourOne', ComponentFourOne)
  .component('componentFourTwo', ComponentFourTwo)
  .component('componentFourThree', ComponentFourThree);

export const contextFour: string = module.name;