import { TBreakpoints } from './types';

const breakpoints = [320, 768, 1024].map(v => `${v}px`) as TBreakpoints<string>;

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.m = breakpoints[2];

export { breakpoints };
