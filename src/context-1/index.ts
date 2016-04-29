import {ComponentOneOne} from './cmp-1.1';
import {DirectiveOneOne} from './directive-1.1';

const module = angular.module('ngGovExample.context-1', [])

  .directive('directiveOneOne', <any> DirectiveOneOne)
  .component('componentOneOne', ComponentOneOne);

export const contextOne: string = module.name;