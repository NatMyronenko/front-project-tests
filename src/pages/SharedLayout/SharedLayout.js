import { Container, Logo } from 'components';
import css from './SharedLayout.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.Header}>
        <Container>
          <div className={css.Header__menu}>
            <Logo />

            <nav className={css.Menu__body}>
              <button className={css.Header_button} type="button">
                EN
              </button>
            </nav>
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
