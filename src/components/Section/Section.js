import { Container } from 'components/Container/Container.styled';
import React from 'react';

export const Section = ({ children }) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};
