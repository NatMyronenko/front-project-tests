export const validatePassword = values => {
  if (!values.password) {
    return 'Required';
  } else if (values.password.length < 8) {
    return 'Password must be at least 8 symbols long';
  } else if (values.password.length > 32) {
    return 'Password must be at most 32 symbols long';
  } else if (
    !/^(?=.*?[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[A-Za-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,32}$/.test(
      values.password
    )
    //!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>?]).{8,32}$/i.test(
    //  values.password
    //)
  ) {
    return 'Password does not comply with the required template. Please, write a valid password';
  } else {
    return false;
  }
};
