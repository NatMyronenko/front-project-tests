import { Section, Metrics, SignUpForm, LoginForm } from 'components';
import React, { useState } from 'react';
import css from './Home.module.css';

export const Home = () => {
  const [isOnLogin, setIsOnLogin] = useState(false);

  function handleOnLogin() {
    setIsOnLogin(!isOnLogin);
  }
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

          <button
            className={css.Demonstration}
            type="button"
            onClick={handleOnLogin}
          >
            click
          </button>
        </div>

        <div className={css.Form_wrapper}>
          {isOnLogin ? <LoginForm /> : <SignUpForm />}
        </div>
        <div className={css.Elipse1}></div>
        <div className={css.Elipse2}></div>
        <div className={css.Elipse3}></div>
      </div>
      <Metrics />
    </Section>
  );
};
