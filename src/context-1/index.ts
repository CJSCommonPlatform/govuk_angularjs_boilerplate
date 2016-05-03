import {PageComponentOneOne} from './page-cmp-1.1';

const module = angular.module('ngGovExample.context-1', [])

  .component('pageComponentOneOne', PageComponentOneOne);

export const contextOne: string = module.name;