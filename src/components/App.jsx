import { Wraper } from './Wraper/Wraper.styled';
import { Header } from './Header/Header';
import { Section } from './Section/Section';
import Button from './Button/Button';

export const App = () => {
  return (
    <Wraper>
      <Header></Header>
      <Section>
        <h1>Hello World</h1>
        <Button textValue="Test Now" colorType="button--blue" />
      </Section>
    </Wraper>
  );
};
