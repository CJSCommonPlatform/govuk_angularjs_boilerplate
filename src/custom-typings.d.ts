// fix some weirdness with angular definitelyTyped

namespace angular {
  interface IModule {
    directive(name: string, factory: any): ng.IModule
  }
}