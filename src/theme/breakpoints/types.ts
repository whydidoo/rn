export enum BreakpointsAliasEnum {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
}

export type TBreakpointsAliasString = keyof typeof BreakpointsAliasEnum;

export type TBreakpoints<T> = T[] & {
  [key in TBreakpointsAliasString]: T;
};
