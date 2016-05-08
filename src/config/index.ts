import { routeConfig } from './routes';
import { compileConfig } from './compile';

const module = angular.module('govuk-angularjs-framework.config', [
  routeConfig,
  compileConfig
]);

export const config: string = module.name;