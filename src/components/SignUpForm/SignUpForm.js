import React, { useState } from 'react';
import css from './SignUpForm.module.css';
import { Button, CustomCheckbox } from 'components';
import { AiOutlineEye } from 'react-icons/ai';

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const isFormValid = firstName && lastName && email && password;

  return (
    <form id="form-signup" className={css.SignUp_Form}>
      <div className={css.User_Box}>
        <input
          type="text"
          name="username"
          value={firstName}
          id="user-name"
          className={css.Input}
          placeholder="First name"
          onChange={handleFirstNameChange}
        />
        <div className={css.Input_desr}>
          This name will be used for greeting and on the certificate of test
          completion
        </div>
        <div className={css.Form_Error}></div>
      </div>
      <div className={css.User_Box}>
        <input
          type="text"
          name="userLastName"
          value={lastName}
          id="user-name"
          className={css.Input}
          placeholder="Last name"
          onChange={handleLastNameChange}
        />
        <div className={css.Input_desr}>
          This last name will be used on the certificate of test completion
        </div>
        <div className={css.Form_Error}></div>
      </div>

      <div className={css.User_Box}>
        <input
          type="email"
          name="userEmail"
          value={email}
          id="user-email"
          placeholder="Email"
          className={css.Input}
          onChange={handleEmailChange}
        />
        <div className={css.Input_desr}>
          This email will be used for your login, notifications and password
          recovery. We don’t send spam
        </div>
        <div className={css.Form_Error}></div>
      </div>

      <div className={css.User_Box}>
        <input
          type="password"
          name="userPassword"
          value={password}
          id="user-password"
          placeholder="Password"
          className={css.Input}
          onChange={handlePasswordChange}
        />
        <AiOutlineEye className={css.Password_icon} size={30} />
        <div className={css.Input_desr}>
          The password must contain a capital and lowercase letter and numbers,
          with no fewer than 8 characters
        </div>
        <div className={css.Form_Error}></div>
      </div>

      <div className={css.Checkbox_signUp}>
        <CustomCheckbox id="signUpCheckbox">
          <div className={css.Privacy_desr}>
            By creating this account you agree to the <span>terms of use</span>{' '}
            and <span>privacy policy</span>
          </div>
        </CustomCheckbox>
      </div>

      <Button type="submit" colorType="button--blue" disabled={!isFormValid}>
        Sign Up
      </Button>

      {/*<button type="submit" className={css.Login_Button}>
		Login
	</button>*/}
    </form>
  );
};
