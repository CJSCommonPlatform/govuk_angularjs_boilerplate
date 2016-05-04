import {domainOneRoutes} from '../domain-1/routes';
import {domainTwoRoutes} from '../domain-2/routes';
import {domainThreeRoutes} from '../domain-3/routes';

export const routes: angular.ui.IState[] = [
  ...domainOneRoutes,
  ...domainTwoRoutes,
  ...domainThreeRoutes
];