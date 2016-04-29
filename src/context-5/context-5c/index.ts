import {ComponentFiveCOne} from './cmp-5c.1';

const module = angular.module('ngGovExample.context-5.context-5c', [])

  .component('component5cOne', ComponentFiveCOne);

export const context5cOne: string = module.name;