import {ComponentFiveBOne} from './cmp-5b.1/cmp-5b.1';

const module = angular.module('ngGovExample.context-5.context-5b', [])

  .component('component5bOne', ComponentFiveBOne);

export const context5bOne: string = module.name;