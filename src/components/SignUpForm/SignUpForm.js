import React from 'react';
import css from './SignUpForm.module.css';
import { Button } from 'components';
import { AiOutlineEye } from 'react-icons/ai';

export const SignUpForm = ({ isOnLogin }) => {
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
            placeholder="First name"
            pattern="^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$"
          />

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
            placeholder="Last name"
            pattern="^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$"
          />

          <div className={css.Form_Error}></div>
        </div>

        <div className={css.User_Box}>
          <input
            type="email"
            name="userEmail"
            required
            id="user-email"
            placeholder="Email"
            className={css.Input}
            title="This email will be used for your login,
						notifications and password recovery. 
						We don’t send spam."
            pattern="^(?=.{10,63}$)[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$"
          />

          <div className={css.Form_Error}></div>
        </div>

        <div className={css.User_Box}>
          <input
            type="password"
            name="userPassword"
            id="user-password"
            placeholder="Password"
            required
            className={css.Input}
            title="The password must contain a capital and 
						lowercase letter and numbers, with no
						fewer than 8 characters."
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>\?]).{8,32}$"
          />
          <AiOutlineEye className={css.Password_icon} size={30} />

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
