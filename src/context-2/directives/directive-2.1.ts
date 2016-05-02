import {Directive} from '@scarlz/cpp';

@Directive({
  require: {
    ngModel: 'ngModel'
  }
})
export class DirectiveTwoOne {

  ngModel: ng.INgModelController;

  $onInit() {
    angular.extend(this.ngModel.$validators, {
      custom: (val: number): boolean => {
        return val % 2 === 0;
      }
    });
  }
}