import {common} from './common';
import {config} from './config';
import {contextOne} from './context-1';
import {contextTwo} from './context-2';
import {contextFour} from './context-4';

require('./index.scss');

const appModule = angular.module('ngGovExample', [
  common,
  config,
  contextOne,
  contextTwo,
  contextFour,
  'oc.lazyLoad',
  'ui.router'
]);

export const app = appModule.name;