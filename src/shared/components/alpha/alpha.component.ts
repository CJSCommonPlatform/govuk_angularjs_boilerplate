import { Component } from '@govuk/angularjs-framework';

import { IModel } from '../../interfaces';

require('./alpha.component.scss');

@Component({
  bindings: {
    model: '<'
  },
  template: require('./alpha.component.html')
})
export class AlphaComponent {

  model: IModel;
}