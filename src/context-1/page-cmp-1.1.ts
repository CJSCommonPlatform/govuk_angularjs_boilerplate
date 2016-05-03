import {Component} from '@scarlz/cpp';

require('./page-cmp-1.1.scss');

@Component({
  bindings: {
    prop: '@'
  },
  template: require('./page-cmp-1.1.html')
})

export class PageComponentOneOne {

  prop: string;
}