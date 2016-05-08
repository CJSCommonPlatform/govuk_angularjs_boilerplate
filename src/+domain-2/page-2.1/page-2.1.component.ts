import { Component } from '@govuk/angularjs-framework';

require('./page-2.1.component.scss');

@Component({
  template: require('./page-2.1.component.html')
})
export class PageTwoOneComponent {

  items: string[] = ['Alpha', 'Beta', 'Gamma'];
  selectedItem: string;

  setSelectedItem(value: string) {
    this.selectedItem = value;
  }
}