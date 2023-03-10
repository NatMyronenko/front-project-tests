import React from 'react';
import css from './SignUpForm.module.css';
import { Button } from 'components';
import { FaUserAstronaut, FaLock, FaRegEnvelope } from 'react-icons/fa';

export const SignUpForm = () => {
  return (
    <form id="form-signup" className={css.SignUp_Form}>
      <div className={css.User_Box}>
        <input
          type="text"
          name="username"
          id="user-name"
          className={css.Input}
          placeholder="First name"
        />
        <FaUserAstronaut className={css.Form_icon} size={20} />
        <div className={css.Form_Error}></div>
      </div>
      <div className={css.User_Box}>
        <input
          type="text"
          name="userLastName"
          id="user-name"
          className={css.Input}
          placeholder="Last name"
        />
        <FaUserAstronaut className={css.Form_icon} size={20} />
        <div className={css.Form_Error}></div>
      </div>
      <div className={css.User_Box}>
        <input
          type="email"
          name="userEmail"
          id="user-email"
          placeholder="Email"
          className={css.Input}
        />
        <FaRegEnvelope className={css.Form_icon} size={20} />

        <div className={css.Form_Error}></div>
      </div>
      <div className={css.User_Box}>
        <input
          type="password"
          name="userPassword"
          id="user-password"
          placeholder="Password"
          className={css.Input}
        />

        <FaLock className={css.Form_icon} size={20} />
        <div className={css.Form_Error}></div>
      </div>

      <div className={css.Checkbox}>
        <input id="c_1" type="checkbox" name="userAgreed" value="1" />
        <label htmlFor="c_1">
          <span className={css.Checkbox_Text}>I agree to the terms</span>
        </label>
      </div>

      <Button type="submit" colorType="button--blue">
        Sign Up
      </Button>

      {/*<button type="submit" className={css.Login_Button}>
		Login
	</button>*/}
    </form>
  );
};
