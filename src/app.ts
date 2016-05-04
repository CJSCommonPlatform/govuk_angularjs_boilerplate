import {common} from './common';
import {config} from './config';
import {domainOne} from './domain-1';
import {domainTwo} from './domain-2';

require('./index.scss');

const appModule = angular.module('ngGovExample', [
  common,
  config,
  domainOne,
  domainTwo,
  'oc.lazyLoad',
  'ui.router'
]);

export const app = appModule.name;