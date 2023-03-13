import { Button } from 'components';
import React from 'react';
import css from './LoginForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';

export const LoginForm = () => {
  return (
    <form id="form-login" className={css.Login_Form}>
      <div className={css.User_Box}>
        <input
          type="email"
          name="userEmail"
          id="user-email"
          className={css.Input}
          placeholder="Enter your email here"
        />

        <div className={css.Form_Error}></div>
      </div>
      <div className={css.User_Box}>
        <input
          type="password"
          name="userPassword"
          required
          id="user-password"
          className={css.Input}
          placeholder="Enter your password here"
        />
        <AiOutlineEye className={css.Password_icon} size={30} />
        <div className={css.Form_Error}></div>
      </div>

      <div className={css.Checkbox_login}>
        <input
          id="c_1"
          className={css.Checkbox_input}
          type="checkbox"
          value="1"
          name=""
        />
        <label htmlFor="c_1" className={css.Checkbox_label}>
          <span className={css.Checkbox_text}>Remember Me</span>
        </label>
      </div>

      <Button type="submit" colorType="button--blue">
        Sign in
      </Button>

      {/*<button type="submit" className={css.Login_Button}>
        Login
      </button>*/}
    </form>
  );
};
