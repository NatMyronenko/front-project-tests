export const validateFirstName = values => {
  if (!values.firstName) {
    return 'Required';
  } else if (values.firstName.length < 2) {
    return 'First name must be at least 2 symbols long.';
  } else if (values.firstName.length > 24) {
    return 'First name must be at most 24 symbols long.';
  } else if (
    !/^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/i.test(
      values.firstName
    )
  ) {
    return 'First name must contain only Cyrillic or Latin characters, hyphen and/or space in the middle';
  } else {
    return false;
  }
};
