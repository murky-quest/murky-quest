import {
  AppShell,
  Header,
  Navbar,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Space,
  Grid,
} from '@mantine/core';

type Props = {};

const Suggestions: React.FC<Props> = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <SuggestionsInner />
    </AppShell>
  );
};

const SuggestionsInner = () => {
  const suggestions = [
    {
      title: '1984',
    },
    {
      title: 'Brave New World',
    },
    {
      title: 'Game of Thrones',
    },
  ] as const; // TODO: delete as const later

  return (
    <>
      <Text>Below are some suggestions:</Text>
      <Grid gutter="xl">
        {suggestions.map(({ title }) => (
          <Grid.Col span={4}>
            <SuggestionCard key={title} title={title} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

type SuggestionCardProps = {
  title: string;
};

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};

export default Suggestions;
