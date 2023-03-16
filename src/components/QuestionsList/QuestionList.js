import React from 'react';
import css from './QuestionList.module.css';
import { QuestionItem } from 'components';

export const QuestionList = () => {
  return (
    <>
      <div className={css.Question_list}>
        <QuestionItem />
      </div>
    </>
  );
};
