import { CustomButton, Section, SelectList } from 'components';
import React from 'react';
import languages from 'services/languages';
import css from './Welcome.module.css';

export const Welcome = () => {
  return (
    <>
      <Section>
        <div className={css.Welcome_block}>
          <h2 className={css.Welcome_title}>Welcome to the test board!</h2>
          <p className={css.Welcome_subtitle}>
            Here you can choose the test you want to complete a test.
          </p>
          <p className={css.Welcome_text}>
            Here you will see a description of each item on the test that you
            will hover over with your cursor.
          </p>
          <SelectList languages={languages} />
          <CustomButton type="button" disabled={false}>
            Start testing
          </CustomButton>
        </div>
      </Section>
    </>
  );
};
