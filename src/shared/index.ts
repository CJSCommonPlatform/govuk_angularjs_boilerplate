import { AlphaComponent } from './components/alpha/alpha.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThetaService } from './services/theta.service';
import { BetaDirective } from './directives/beta.directive';
import { deltaFilter } from './filters/delta.filter';

const module = angular.module('govuk-angularjs-boilerplate.shared', [])
  .filter('delta', deltaFilter)
  .service('ThetaService', ThetaService)
  .directive('beta', BetaDirective)
  .component('alpha', AlphaComponent)
  .component('navbar', NavbarComponent);

export const shared = module.name;