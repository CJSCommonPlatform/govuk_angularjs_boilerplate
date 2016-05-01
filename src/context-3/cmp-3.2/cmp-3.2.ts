import {Component} from '@scarlz/cpp';
import {ServiceThreeOne} from '../services/service-3.1';

require('./cmp-3.2.scss');

@Component({
  template: require('./cmp-3.2.html')
})

export class ComponentThreeTwo {

  loading: boolean;
  values: string[];
  text: string;

  static $inject = ['ServiceThreeOne'];

  constructor(private _service: ServiceThreeOne) {}

  // $onInit automatically invoked by angular when component bindings are
  // available to the controller
  $onInit() {
    this.loading = true;
    this._service.doSomething()
      .then(values => this.values = values)
      .finally(() => this.loading = false);
  }
}