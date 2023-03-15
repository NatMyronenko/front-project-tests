import React from 'react';
import { SelectItem } from 'components';
import css from './SelectList.module.css';

export const SelectList = ({ languages }) => {
  return (
    <ul className={css.SelectList}>
      {languages.map(item => (
        <SelectItem language={item} key={item.id} />
      ))}
    </ul>
  );
};
