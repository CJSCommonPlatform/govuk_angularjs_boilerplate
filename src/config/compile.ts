const isProd = process.env.NODE_ENV === 'production';

const module = angular.module('govuk-angularjs-boilerplate.config.compile', [])

  .config(($compileProvider: ng.ICompileProvider) => {
    $compileProvider.debugInfoEnabled(!isProd);
  });

export const compileConfig: string = module.name;