export const validateLastName = values => {
  if (!values.lastName) {
    return 'Required';
  } else if (values.lastName.length < 2) {
    return 'First name must be at least 2 symbols long.';
  } else if (values.lastName.length > 24) {
    return 'First name must be at most 24 symbols long.';
  } else if (
    !/^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/i.test(
      values.lastName
    )
  ) {
    return 'First name must contain only Cyrillic or Latin characters, hyphen and/or space in the middle';
  } else {
    return false;
  }
};
