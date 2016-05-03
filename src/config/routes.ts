import {contextOneRoutes} from '../context-1/routes';
import {contextTwoRoutes} from '../context-2/routes';
import {contextThreeRoutes} from '../context-3/routes';

export const routes: angular.ui.IState[] = [
  ...contextOneRoutes,
  ...contextTwoRoutes,
  ...contextThreeRoutes
];