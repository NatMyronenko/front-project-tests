import { Section, Metrics, SignUpForm, LoginForm } from 'components';
import React, { useState } from 'react';
import css from './Home.module.css';

export const Home = () => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  function handleOnLogin() {
    setIsOnLogin(!isOnLogin);
  }
  return (
    <Section>
      <div className={css.Home_wrapper}>
        <div className={css.Title_wrapper}>
          <h1 className={css.Hero_title}>
            It’s time to <span>check </span> <br />
            your <span>knowledge</span> here!
          </h1>
          <p className={css.Hero_desr}>
            We made this platform with lots of <b>Javascript</b> and <b>Java</b>{' '}
            tests. You can easily check how much you know and prepare for a
            successful job interview.
          </p>
        </div>

        {isOnLogin ? (
          <LoginForm isOnLogin={handleOnLogin} />
        ) : (
          <SignUpForm isOnLogin={handleOnLogin} />
        )}

        <div className={css.Elipse1}></div>
        <div className={css.Elipse2}></div>
        <div className={css.Elipse3}></div>
      </div>
      <div className={css.Metrics_wrapper}>
        <Metrics />
      </div>

      {/*{isOnLogin ? <Metrics /> : null}*/}
    </Section>
  );
};
