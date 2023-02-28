import Button from 'components/Button/Button';
import { Container } from 'components/Container/Container.styled';
import { FirstLetter } from 'components/Logo/First-letter.styled';
import { LogoTitle } from 'components/Logo/LogoTitle.styled';
import { Menu } from 'components/Menu/Menu';
import css from './Header.module.css';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <Container>
        <div className={css.Header__menu}>
          <LogoTitle>
            <FirstLetter>E</FirstLetter>xpresso <FirstLetter>C</FirstLetter>afe
          </LogoTitle>

          <nav className={css.Menu__body}>
            <Menu />
            <div className={css.Button__list}>
              <Button colorType="button--white">Log in</Button>
              <Button colorType="button--blue">Register</Button>
            </div>

            {/* <button type="button" class="menu__icon icon-menu">
              <span></span>
            </button> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};
