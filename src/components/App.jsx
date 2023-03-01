import { Wraper, Header, Section, Button } from 'components';

export const App = () => {
  return (
    <Wraper>
      <Header></Header>
      <Section>
        <h1>Hello World</h1>
        <Button colorType="button--blue">Test Now</Button>
      </Section>
    </Wraper>
  );
};
