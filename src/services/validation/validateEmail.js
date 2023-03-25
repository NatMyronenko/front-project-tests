export const validateEmail = values => {
  if (!values.email) {
    return 'Required';
  } else if (values.email.length < 10) {
    return 'Email must be at least 10 symbols long';
  } else if (values.email.length > 63) {
    return 'Email must be at most 63 symbols long';
  } else if (
    values.email.indexOf('@') === -1 ||
    values.email.indexOf('.') === -1
  ) {
    return 'Your email is missing @ or dot in the domain';
  } else if (
    !/^(?=.{10,63}$)[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/i.test(
      values.email
    )
  ) {
    return 'Email must contain only Latin letters, may contain digits and/or special symbols';
  } else {
    return false;
  }
};
