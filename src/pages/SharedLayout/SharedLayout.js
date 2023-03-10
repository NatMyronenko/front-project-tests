import { Container, FirstLetter, LogoTitle } from 'components';
import css from './SharedLayout.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.Header}>
        <Container>
          <div className={css.Header__menu}>
            <LogoTitle>
              <FirstLetter>E</FirstLetter>xpresso <FirstLetter>C</FirstLetter>
              afe
            </LogoTitle>

            <nav className={css.Menu__body}>
              <button type="button">EN</button>
            </nav>
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
