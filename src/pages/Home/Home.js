import { Section, LoginForm, Metrics } from 'components';
import React from 'react';
import css from './Home.module.css';

export const Home = () => {
  return (
    <Section>
      <div className={css.Home_wrapper}>
        <div className={css.Title_wrapper}>
          <h1 className={css.Hero_title}>
            It’s time to <span>check </span> <br />
            your <span>QA knowledge</span> here!
          </h1>
          <p className={css.Hero_desr}>
            We made this platform so you can easily check how much you know and
            prepare for a successful job interview.
          </p>
        </div>

        <div className={css.Form_wrapper}>
          <LoginForm />
        </div>
        <div className={css.Elipse1}></div>
        <div className={css.Elipse2}></div>
        <div className={css.Elipse3}></div>
      </div>
      <Metrics />
    </Section>
  );
};
