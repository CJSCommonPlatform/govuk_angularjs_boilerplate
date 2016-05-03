import {contextOneRoutes} from '../context-1/routes';
import {contextTwoRoutes} from '../context-2/routes';
import {contextThreeRoutes} from '../context-3/routes';

export const routes: angular.ui.IState[] = [
  {
    state:    'home',
    url:      '/',
    template: `<component-a model="{propOne: 'Foo'}"></component-a>`
  },
  ...contextOneRoutes,
  ...contextTwoRoutes,
  ...contextThreeRoutes
];

console.log(routes);