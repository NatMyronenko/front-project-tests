import React, { useState } from 'react';
import css from './SignUpForm.module.css';
import { Button, CustomCheckbox } from 'components';
import { AiOutlineEye } from 'react-icons/ai';

export const SignUpForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => setIsChecked(!isChecked);
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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="user-name"
            className={css.Input}
            placeholder="First name"
            pattern="^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$"
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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="user-name"
            className={css.Input}
            placeholder="Last name"
            pattern="^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$"
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
            required
            id="user-email"
            placeholder="Email"
            className={css.Input}
            pattern="^(?=.{10,63}$)[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$"
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
            id="user-password"
            placeholder="Password"
            required
            className={css.Input}
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>\?]).{8,32}$"
          />
          <AiOutlineEye className={css.Password_icon} size={30} />
          <div className={css.Input_desr}>
            The password must contain a capital and lowercase letter and
            numbers, with no fewer than 8 characters
          </div>
          <div className={css.Form_Error}></div>
        </div>

        <div className={css.Checkbox_signUp}>
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
        </div>

        <Button type="submit" colorType="button--blue" disabled={!isChecked}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
