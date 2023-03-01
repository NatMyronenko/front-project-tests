import { Container } from 'components';
import React from 'react';

export const Section = ({ children }) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};
