import { Button } from 'components';
import React from 'react';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <form id="form-login" className={css.Login_Form}>
      <div className={css.User_Box}>
        <input
          type="email"
          required
          name="userEmail"
          id="user-email"
          className={css.Input}
        />
        <label>E-mail</label>
        <div className={css.Form_Error}></div>
      </div>
      <div className={css.User_Box}>
        <input
          type="password"
          name="userPassword"
          required
          id="user-password"
          className={css.Input}
        />
        <label>Password</label>
        <div className={css.Form_Error}></div>
      </div>

      {/*<div class="checkbox">
        <input
          id="c_1"
          className="checkbox__input"
          type="checkbox"
          value="1"
          name=""
        />
        <label for="c_1" class="checkbox__label">
          <span class="checkbox__text">Remember Me</span>
        </label>
      </div>*/}

      <Button type="submit" colorType="button--blue">
        Log In
      </Button>

      {/*<button type="submit" className={css.Login_Button}>
        Login
      </button>*/}
    </form>
  );
};
