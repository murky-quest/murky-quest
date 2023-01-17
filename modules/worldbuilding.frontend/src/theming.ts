import { MantineTheme } from '@mantine/core';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const lightTheme: DeepPartial<MantineTheme> = {
  colorScheme: 'light',
  colors: {
    blue: [
      '#E9EDFC',
      '#C1CCF6',
      '#99ABF0',
      '#99ABF0',
      '#99ABF0',
      '#99ABF0',
      '#99ABF0',
      '#99ABF0',
      '#99ABF0',
      '#99ABF0',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: 30 },
    },
  },
};
