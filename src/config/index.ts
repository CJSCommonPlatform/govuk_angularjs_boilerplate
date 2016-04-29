import {routes} from './routes';

const module = angular.module('ngGovExample.config', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider) => {
    angular.forEach(routes, (config, state) => $stateProvider.state(state, config));
    $urlRouterProvider.otherwise('/');
  });

export const config: string = module.name;