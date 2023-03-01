import React from 'react';
import css from './SignUpForm.module.css';
import Button from 'components/Button/Button';

export const SignUpForm = () => {
  return (
    <form id="form-SignUp" className={css.SignUp_Form}>
      <div className={css.User_Box}>
        <input
          type="text"
          required
          name="userName"
          id="user-name"
          className={css.Input}
        />
        <label>Username</label>
        <div className={css.Form_Error}></div>
      </div>
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

      <div className={css.Checkbox}>
        <input id="c_1" type="checkbox" name="userAgreed" value="1" name="" />
        <label htmlFor="c_1">
          <span className={css.Checkbox_Text}>I agree to the terms</span>
        </label>
      </div>

      <Button type="submit" colorType="button--blue">
        Register
      </Button>

      {/*<button type="submit" className={css.Login_Button}>
		Login
	</button>*/}
    </form>
  );
};
