require('./index.scss');

import { shared } from './shared';
import { config } from './config';
import { domainOne } from './+domain-1';
import { domainTwo } from './+domain-2';

const appModule = angular.module('govuk-angularjs-boilerplate', [
  shared,
  config,
  domainOne,
  domainTwo,
  'oc.lazyLoad',
  'ui.router'
]);

export const app = appModule.name;