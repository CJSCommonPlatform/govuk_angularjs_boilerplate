import {ComponentFiveAOne} from './components/cmp-5a.1/cmp-5a.1';

const module = angular.module('ngGovExample.context-5.context-5a', [])

  .component('component5aOne', ComponentFiveAOne);

export const context5aOne: string = module.name;