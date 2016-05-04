import {Component} from '@govuk/angularjs-framework';
import {IModel} from '../../interfaces';

require('./cmp-a.scss');

@Component({
  bindings: {
    model: '<'
  },
  template: require('./cmp-a.html')
})

export class ComponentA {

  model: IModel;

}