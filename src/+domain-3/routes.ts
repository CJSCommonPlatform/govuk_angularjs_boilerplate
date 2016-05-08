
export const domainThreeRoutes: angular.ui.IState[] = [
  {
    state:    'domain3',
    url:      '/domain-three',
    abstract: true,
    template: '<layout-three-a></layout-three-a>',
    resolve: {
      module: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
        const d = $q.defer();
        require.ensure([], require => {
          $ocLazyLoad.load({name: require('./index').domainThree});
          d.resolve();
        });
        return d.promise;
      }]
    }
  },
  {
    state:    'domain3.one',
    url:      '/one',
    template: '<page-three-one></page-three-one>'
  },
  {
    state:    'domain3.two',
    url:      '/two',
    template: '<page-three-two></page-three-two>'
  }
];