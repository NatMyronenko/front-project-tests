import { Button, CustomCheckbox } from 'components';
import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';
//import checkSvg from '../../img/sprite.svg'

export const LoginForm = ({ isOnLogin }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => setIsChecked(!isChecked);

  const handleSubmit = e => {
    e.preventDefault();
    const formEl = e.currentTarget.elements;

    const formData = {
      email: formEl.userEmail.value,
      password: formEl.userPassword.value,
    };

    console.log(formData);
  };

  return (
    <div className={css.Form_wrapper}>
      <form id="form-login" className={css.Login_Form} onSubmit={handleSubmit}>
        <div className={css.User_Box}>
          <input
            type="email"
            name="userEmail"
            required
            id="user-email"
            className={css.Input}
            placeholder="Enter your email here"
            pattern="^(?=.{10,63}$)[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$"
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
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>\?]).{8,32}$"
          />
          <AiOutlineEye className={css.Password_icon} size={30} />
          <div className={css.Form_Error}></div>
        </div>

        <div className={css.Checkbox_login}>
          <CustomCheckbox
            id="checkbox"
            onChange={handleCheck}
            isChecked={isChecked}
          >
            Remember me
          </CustomCheckbox>
        </div>

        <Button type="submit" disabled={false}>
          Sign in
        </Button>
      </form>
      <div className={css.Forgot_pass}>Forgot password?</div>
      <div className={css.Create_acc}>
        Don’t have an acount yet?
        <button type="button" className={css.Create_desr} onClick={isOnLogin}>
          Create your account here.
        </button>
        <br />
        It will take less than two minutes.
      </div>{' '}
    </div>
  );
};
