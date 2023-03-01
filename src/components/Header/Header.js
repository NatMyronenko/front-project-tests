import { Button, Container, FirstLetter, LogoTitle, Menu } from 'components';
import css from './Header.module.css';
import React from 'react';

export const Header = () => {
  return (
    <header className={css.Header}>
      <Container>
        <div className={css.Header__menu}>
          <LogoTitle>
            <FirstLetter>E</FirstLetter>xpresso <FirstLetter>C</FirstLetter>afe
          </LogoTitle>

          <nav className={css.Menu__body}>
            <Menu />
            <div className={css.Button__list}>
              <Button colorType="button--white" formType="form-login">
                Log in
              </Button>
              <Button colorType="button--blue" formType="form-signup">
                Register
              </Button>
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
