import {Component} from '@scarlz/cpp';

@Component({
  bindings: {
    items:    '<',
    onSelect: '&'
  },
  template: require('./cmp-2.2.html')
})

export class ComponentTwoTwo {

  items: string[] = [];
  onSelect: Function;

  select(value: string) {
    this.onSelect({$event: value});
  }
}