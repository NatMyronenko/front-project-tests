import React from 'react';
import css from './QuestionList.module.css';
import { Button, Section, Answer } from 'components';

export const QuestionList = () => {
  return (
    <Section>
      <div className={css.Wrapper}>
        <div className={css.Score}>Question 1/100</div>

        <div className={css.Question_body}>
          <div className={css.Question_text}>
            What types of tests do you know?
          </div>
        </div>
        <div className={css.Answer_body}>
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </div>

        <Button disabled={false}>Next question</Button>
      </div>
    </Section>
  );
};
