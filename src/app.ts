import {common} from './common';
import {config} from './config';
import {contextOne} from './context-1';
import {contextTwo} from './context-2';

require('./index.scss');

const appModule = angular.module('ngGovExample', [
  common,
  config,
  contextOne,
  contextTwo,
  'oc.lazyLoad',
  'ui.router'
]);

export const app = appModule.name;