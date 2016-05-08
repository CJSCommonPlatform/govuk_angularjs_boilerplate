import { Component } from '@govuk/angularjs-framework';

import { ThreeOneService } from '../services/serv-3.1.service';

require('./page-3.1.component.scss');

@Component({
  template: require('./page-3.1.component.html')
})
export class PageThreeOneComponent {

  loading: boolean;
  values: string[];
  text: string;

  static $inject = ['ThreeOneService'];

  constructor(private _service: ThreeOneService) {}

  // $onInit automatically invoked by angular when component bindings are
  // available to the controller
  $onInit() {
    this.loading = true;
    this._service.doSomething()
      .then(values => this.values = values)
      .finally(() => this.loading = false);
  }
}