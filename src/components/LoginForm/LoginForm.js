import Button from 'components/Button/Button';
import React from 'react';
import css from './LoginForm.module.css';
import { ButtonStyle } from '../Button/Button.styled';

export const LoginForm = () => {
  return (
    <form id="form-login" className={css.Login_Form}>
      <div class="user-box">
        <input
          type="email"
          required
          name="userEmail"
          id="user-email"
          className={css.Input}
          placeholder="E-mail"
        />
        <div className="email-error"></div>
      </div>
      <div class="user-box">
        <input
          type="password"
          name="userPassword"
          required
          id="user-surname"
          className={css.Input}
          placeholder="Password"
        />
        <div className="email-error"></div>
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

      <ButtonStyle type="submit">Log In</ButtonStyle>

      {/*<button type="submit" className={css.Login_Button}>
        Login
      </button>*/}
    </form>
  );
};
