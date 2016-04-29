import {Directive} from '@scarlz/cpp';

@Directive({
  require: {
    ngModel: 'ngModel'
  }
})
export class DirectiveOneOne {

  ngModel: ng.INgModelController;

  $onInit() {
    this.ngModel.$validators['custom'] = (val: number): boolean => {
      return val % 2 === 0;
    };
  }
}