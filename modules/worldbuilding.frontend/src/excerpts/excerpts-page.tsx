import React, { useEffect, useState } from 'react';
import { ExcerptsDescription } from './excerpts-description';
import { Card } from '@mantine/core';

export const ExcerptsPage: React.FC<{}> = () => {
  const [excerpts, setExcerpts] = useState<any[]>([]); // TODO: any -> type

  useEffect(() => {
    fetch('http://localhost:7701/worldbuilding/excerpts') // TODO: unhardcode
      .then((response) => response.json())
      .then((data) => setExcerpts(data));
  }, []);

  return (
    <>
      <ExcerptsDescription />
      {excerpts.map(({ id, content }) => (
        <Card title={`ID: "${id}"`} key={id} shadow="sm" m="md" p="md" radius="md" withBorder>
          {content}
        </Card>
      ))}
    </>
  );
};
