import {ComponentOneOne} from './cmp-1.1';

const module = angular.module('ngGovExample.context-1', [])
  
  .component('componentOneOne', ComponentOneOne);

export const contextOne: string = module.name;