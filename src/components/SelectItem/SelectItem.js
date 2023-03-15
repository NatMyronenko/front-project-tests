import React, { useState } from 'react';
import css from './SelectItem.module.css';
import Select from 'react-select';

export const SelectItem = ({ language }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const refineTopics = language => {
    return language.topics.map(item => {
      return { value: item.name, label: item.name };
    });
  };

  const styles = {
    clearIndicator: (baseStyles, state) => {
      console.log(state);
      return {
        ...baseStyles,
        theme: {
          borderRadius: '5px',
        },
      };
    },
  };
  return (
    <Select
      styles={styles}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      className={css.Select}
      isSearchable={false}
      placeholder={language.full_name}
      options={refineTopics(language)}
    ></Select>
  );
};
