import React from 'react';
import { Answer } from 'components';
import css from './QuestionItem.module.css';

export const QuestionItem = () => {
  return (
    <>
      <div className={css.Question_text}>What types of tests do you know?</div>
      <div className={css.Answer_body}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </>
  );
};
