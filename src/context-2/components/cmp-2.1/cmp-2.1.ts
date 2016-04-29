import {Component} from '@scarlz/cpp';

require('./cmp-2.1.scss');

@Component({
  template: require('./cmp-2.1.html')
})

export class ComponentTwoOne {

  items: string[] = ['Alpha', 'Beta', 'Gamma'];
  selectedItem: string;

  setSelectedItem(value: string) {
    this.selectedItem = value;
  }
}