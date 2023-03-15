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
    option: base => ({
      ...base,
      height: '100%',
      marginBottom: 2,
      backgroundColor: 'hsl(223, 100%, 96%)',
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 27,
      paddingRight: 27,
    }),
    valueContainer: base => ({
      ...base,
      backgroundColor: 'hsl(223, 100%, 96%)',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 27,
      paddingRight: 27,
      minWidth: 144,
      fontSize: 27,
      lineHeight: 1.3,
      textTransform: 'uppercase',
    }),
    placeholder: base => ({
      ...base,
      color: '#111f42',
    }),
    indicatorsContainer: base => ({
      ...base,
      backgroundColor: 'hsl(223, 100%, 96%)',
    }),
    dropdownIndicator: base => ({
      ...base,
      color: '#111f42',
    }),
    indicatorSeparator: base => ({
      ...base,
      color: '#111f42',
    }),
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
      theme={theme => ({
        ...theme,
        borderRadius: 5,

        colors: {
          ...theme.colors,
          neutral0: 'white',
          primary25: 'white',
          primary: '#5C81E1',
        },
      })}
      spacing={spacing => ({
        ...spacing,
      })}
    ></Select>
  );
};
// borderRadius
// :
// 4
// colors
// :
// danger
// :
// "#DE350B"
// dangerLight
// :
// "#FFBDAD"
// neutral0
// :
// "hsl(0, 0%, 100%)"
// neutral5
// :
// "hsl(0, 0%, 95%)"
// neutral10
// :
// "hsl(0, 0%, 90%)"
// neutral20
// :
// "hsl(0, 0%, 80%)"
// neutral30
// :
// "hsl(0, 0%, 70%)"
// neutral40
// :
// "hsl(0, 0%, 60%)"
// neutral50
// :
// "hsl(0, 0%, 50%)"
// neutral60
// :
// "hsl(0, 0%, 40%)"
// neutral70
// :
// "hsl(0, 0%, 30%)"
// neutral80
// :
// "hsl(0, 0%, 20%)"
// neutral90
// :
// "hsl(0, 0%, 10%)"
// primary
// :
// "#2684FF"
// primary25
// :
// "#DEEBFF"
// primary50
// :
// "#B2D4FF"
// primary75
// :
// "#4C9AFF"
// [[Prototype]]
// :
// Object
// spacing
// :
// baseUnit
// :
// 4
// controlHeight
// :
// 38
// menuGutter
// :
// 8
