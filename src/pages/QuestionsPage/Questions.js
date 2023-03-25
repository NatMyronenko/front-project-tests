import React from 'react';
import { Section, CustomButton, QuestionItem } from 'components';
import css from './Questions.module.css';

export const Questions = () => {
  return (
    <>
      <div className={css.Question_section}>
        <Section>
          <div className={css.Question_wrapper}>
            <div className={css.Question_score}>Question 1/100</div>
            <QuestionItem />
            <CustomButton disabled={false}>Next question</CustomButton>
          </div>
        </Section>
      </div>
    </>
  );
};
