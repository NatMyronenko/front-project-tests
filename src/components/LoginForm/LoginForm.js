import { Button, CustomCheckbox } from 'components';
import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';
//import checkSvg from '../../img/sprite.svg'

export const LoginForm = ({ isOnLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => setIsChecked(!isChecked);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  return (
    <div className={css.Form_wrapper}>
      <form id="form-login" className={css.Login_Form}>
        <div className={css.User_Box}>
          <input
            type="email"
            value={email}
            name="userEmail"
            id="user-email"
            className={css.Input}
            placeholder="Enter your email here"
            onChange={handleEmailChange}
          />

          <div className={css.Form_Error}></div>
        </div>
        <div className={css.User_Box}>
          <input
            type="password"
            name="userPassword"
            value={password}
            required
            id="user-password"
            className={css.Input}
            placeholder="Enter your password here"
            onChange={handlePasswordChange}
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
