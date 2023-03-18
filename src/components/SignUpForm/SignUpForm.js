import React, { useState } from 'react';
import css from './SignUpForm.module.css';
import { Button } from 'components';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';

export const SignUpForm = ({ isOnLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = e => {
    e.preventDefault();
    const formEl = e.currentTarget.elements;

    const formData = {
      firstName: formEl.username.value,
      lastName: formEl.userLastName.value,
      email: formEl.userEmail.value,
      password: formEl.userPassword.value,
    };
    console.log(formData);
  };

  return (
    <div className={css.Form_wrapper}>
      <form
        id="form-signup"
        className={css.SignUp_Form}
        onSubmit={handleSubmit}
      >
        <div className={css.User_Box}>
          <input
            type="text"
            name="username"
            title="This name will be used for greeting and on 
						the certificate of test completion"
            required
            id="user-name"
            className={css.Input}
            placeholder="Enter your first name"
            pattern="^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$"
          />
          <label htmlFor="user-password" className={css.Input_hint}>
            This last name will be used on the certificate of test completion.
          </label>

          <div className={css.Form_Error}></div>
        </div>
        <div className={css.User_Box}>
          <input
            type="text"
            name="userLastName"
            title="This last name will be used on 
						the certificate of test completion."
            required
            id="user-name"
            className={css.Input}
            placeholder="Enter your last name"
            pattern="^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$"
          />
          <label htmlFor="user-password" className={css.Input_hint}>
            This last name will be used on the certificate of test completion.
          </label>

          <div className={css.Form_Error}></div>
        </div>

        <div className={css.User_Box}>
          <input
            type="email"
            name="userEmail"
            required
            id="user-email"
            placeholder="Enter your email"
            className={css.Input}
            title="This email will be used for your login,
						notifications and password recovery. 
						We don’t send spam."
            pattern="^(?=.{10,63}$)[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$"
          />
          <label htmlFor="user-email" className={css.Input_hint}>
            This email will be used for your login, notifications and password
            recovery. We don’t send spam.
          </label>
          <div className={css.Form_Error}></div>
        </div>

        <div className={css.User_Box}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="userPassword"
            id="user-password"
            placeholder="Enter your password"
            required
            className={css.Input}
            title="The password must contain a capital and 
						lowercase letter and numbers, with no
						fewer than 8 characters."
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>\?]).{8,32}$"
          />
          <label htmlFor="user-password" className={css.Input_hint}>
            The password must contain a capital and lowercase letter and
            numbers, with no fewer than 8 characters.
          </label>
          <button
            type="button"
            onClick={handleTogglePassword}
            className={css.Password_btn}
          >
            {showPassword ? (
              <RiEyeCloseLine size={30} />
            ) : (
              <AiOutlineEye size={30} />
            )}
          </button>

          <div className={css.Form_Error}></div>
        </div>

        {/*<div className={css.Checkbox_signUp}>
          <CustomCheckbox
            id="signUpCheckbox"
            onChange={handleCheck}
            isChecked={isChecked}
          >
            <div className={css.Privacy_desr}>
              By creating this account you agree to the{' '}
              <span>terms of use</span> and <span>privacy policy</span>
            </div>
          </CustomCheckbox>
        </div>*/}

        <Button type="submit" colorType="button--blue" disabled={false}>
          Sign Up
        </Button>
      </form>

      <div className={css.Redirected}>
        Have an account already?
        <button
          type="button"
          className={css.Redirected_link}
          onClick={isOnLogin}
        >
          Sign in here.
        </button>
      </div>
    </div>
  );
};
