import { AppShell, Navbar, Header, Button } from '@mantine/core';
import { NavbarButton } from '../navbar-button';

export const HomePage = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section>
            <NavbarButton>Excerpts</NavbarButton>
            <NavbarButton>Spells</NavbarButton>
            <NavbarButton>Beasts</NavbarButton>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Worldbuilding
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <p>
        Some<Button>Click me!</Button>contents and <span className="special">a special</span>
      </p>
    </AppShell>
  );
};
