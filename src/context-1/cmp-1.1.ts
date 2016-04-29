import {Component} from '@scarlz/cpp';

require('./cmp-1.1.scss');

@Component({
  bindings: {
    prop: '@'
  },
  template: require('./cmp-1.1.html')
})

export class ComponentOneOne {

  prop: string;
}