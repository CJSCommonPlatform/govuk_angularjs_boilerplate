import { routes } from '../routes';

const module = angular.module('govuk-angularjs-boilerplate.config.routes', ['ui.router'])

  .config(($stateProvider: angular.ui.IStateProvider,
           $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
    routes.forEach(config => $stateProvider.state(config.state, config));
    $urlRouterProvider.otherwise('/domain-one');
  });

export const routeConfig: string = module.name;