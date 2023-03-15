import { Button, Section, SelectList } from 'components';
import React from 'react';
import languages from 'services/languages';

export const Welcome = () => {
  return (
    <>
      <Section>
        <h2>Welcome to the test board!</h2>
        <p>Here you can choose the test you want to complete a test.</p>
        <p>
          Here you will see a description of each item on the test that you will
          hover over with your cursor.
        </p>
        <SelectList languages={languages} />
        <Button type="button" disabled={false}>
          Start testing
        </Button>
      </Section>
    </>
  );
};
