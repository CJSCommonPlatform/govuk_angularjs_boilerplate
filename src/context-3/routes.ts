
export const contextThreeRoutes: angular.ui.IState[] = [
  {
    state:    'context3',
    url:      '/context-three',
    abstract: true,
    template: '<layout-component-three></layout-component-three>',
    resolve: {
      module: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
        const d = $q.defer();
        require.ensure([], require => {
          $ocLazyLoad.load({name: require('./index').contextThree});
          d.resolve();
        });
        return d.promise;
      }]
    }
  },
  {
    state:    'context3.one',
    url:      '/one',
    template: '<page-component-three-one></page-component-three-one>'
  },
  {
    state:    'context3.two',
    url:      '/two',
    template: '<page-component-three-two></page-component-three-two>'
  }
];