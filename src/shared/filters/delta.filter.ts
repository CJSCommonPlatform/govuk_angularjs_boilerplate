import { IModel } from '../interfaces';

export function deltaFilter() {

  return (model: IModel): string => {
    return model.propOne + ' (filtered by deltaFilter)';
  };
}