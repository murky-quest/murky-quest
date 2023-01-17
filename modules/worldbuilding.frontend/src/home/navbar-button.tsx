import { UnstyledButton } from '@mantine/core';

// TODO: Move to the shared library
type WithChildren<T = Record<string, any>> = {
  children?: React.ReactNode;
};

export type Props = WithChildren<{}>;

export const NavbarButton = ({ children }: Props) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.blue[0],
      })}
      m="md"
      p="md"
    >
      {children}
    </UnstyledButton>
  );
};
