import { Component } from '@govuk/angularjs-framework';

require('./cmp-2.1.component.scss');

@Component({
  bindings: {
    items:    '<',
    onSelect: '&'
  },
  template: require('./cmp-2.1.component.html')
})
export class TwoOneComponent {

  items: string[] = [];
  onSelect: Function;

  select(value: string) {
    this.onSelect({$event: value});
  }
}