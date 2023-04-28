import React from 'react';
import css from './SelectItem.module.css';
import Select from 'react-select';

export const SelectItem = ({ language, setSelectedOption }) => {
  const refineTopics = language => {
    return language.topics.map(item => {
      return {
        value: item.name,
        label: item.name,
        description: item.description,
        attempts: item.attempts,
      };
    });
  };

  const styles = {
    option: base => ({
      ...base,
      backgroundColor: '#ffffff',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 24,
      color: '#5C81E1',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.3,
      ':hover': {
        backgroundColor: '#EBF0FF',
        borderRadius: 3,
      },
    }),
    singleValue: base => ({
      ...base,
      color: '#5C81E1',
    }),
    valueContainer: base => ({
      ...base,
      backgroundColor: 'white',
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 5,
      paddingRight: 5,
      color: '#5C81E1',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.3,
      borderRadius: 12,
      display: 'flex',
    }),
    control: base => ({
      ...base,
      borderRadius: 12,
      borderWidth: 0.5,

      borderColor: 'rgba(92, 129, 225, 0.8)',
      minHeight: 'auto',
    }),
    placeholder: base => ({
      ...base,
      color: '#5C81E1',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.3,
    }),

    indicatorsContainer: base => ({
      ...base,
      backgroundColor: 'white',
      borderRadius: 12,
      paddingLeft: 1,
      paddingRight: 1,
    }),

    dropdownIndicator: base => ({
      ...base,
      color: '#transparent',
      margin: 0,
      paddingLeft: 2,
      paddingRight: 2,
    }),
    indicatorSeparator: base => ({
      ...base,
      backgroundColor: 'transparent',
    }),
  };
  return (
    <Select
      styles={styles}
      onChange={setSelectedOption}
      className={css.Select}
      isSearchable={false}
      flexGrow="1"
      placeholder="Choose a test category"
      options={refineTopics(language)}
      theme={theme => ({
        ...theme,

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
