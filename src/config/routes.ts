
export const routes: {[key: string]: angular.ui.IState} = {

  'home': {
    url: '/',
    template: `
      <component-a model="{propOne: 'Foo'}"></component-a>
    `
  },

  'context1': {
    url: '/context-one',
    template: '<component-one-one></component-one-one>'
  },

  'context2': {
    url: '/context-two',
    template: '<component-two-one></component-two-one>'
  },

  'context3': {
    url: '/context-three',
    abstract: true,
    template: '<ui-view></ui-view>',
    resolve: {
      module: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
        const d = $q.defer();
        require.ensure([], require => {
          $ocLazyLoad.load({name: require('../context-3').contextThree});
          d.resolve();
        });
        return d.promise;
      }]
    }
  },

  'context3.one': {
    url: '/one',
    template: '<component-three-one></component-three-one>'
  },

  'context3.two': {
    url: '/two',
    template: '<component-three-two></component-three-two>'
  },

  'context4': {
    url: '/context-four',
    template: '<component-four-one></component-four-one>'
  },

  'context5a': {
    url: '/context-five-a',
    template: '<component-5a-one></component-5a-one>'
  }
};