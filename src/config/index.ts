import {routes} from './routes';

const module = angular.module('ngGovExample.config', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider) => {
    routes.forEach(config => $stateProvider.state(config.state, config));
    $urlRouterProvider.otherwise('/context-one');
  });

export const config: string = module.name;