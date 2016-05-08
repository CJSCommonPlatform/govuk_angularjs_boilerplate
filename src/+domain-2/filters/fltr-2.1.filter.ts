
export function twoOneFilter(): Function {

  return (val: string): string => {
    return val + ' (filtered by twoOneFilter)';
  };
}