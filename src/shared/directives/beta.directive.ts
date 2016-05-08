import { Directive } from '@govuk/angularjs-framework';

@Directive({
  require: {
    ngModel: 'ngModel'
  }
})
export class BetaDirective {

  ngModel: ng.INgModelController;

  $onInit() {
    angular.extend(this.ngModel.$validators, {
      custom: (val: number): boolean => {
        return val % 2 === 0;
      }
    });
  }
}