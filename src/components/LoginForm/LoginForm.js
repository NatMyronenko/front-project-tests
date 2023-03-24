import React, { useState } from 'react';
import { useFormik } from 'formik';
import css from './LoginForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
  Box,
} from '@chakra-ui/react';

export const LoginForm = ({ isOnLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = e => {
    e.preventDefault();
    const formEl = e.currentTarget.elements;

    const formData = {
      email: formEl.userEmail.value,
      password: formEl.userPassword.value,
    };

    console.log(formData);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (values.email.length < 10) {
        errors.email = 'Email must be at least 10 symbols long';
      } else if (values.email.length > 63) {
        errors.email = 'Email must be at most 63 symbols long';
      } else if (
        values.email.indexOf('@') === -1 ||
        values.email.indexOf('.') === -1
      ) {
        errors.email = 'Your email is missing @ or dot in the domain';
      } else if (
        !/^(?=.{10,63}$)[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/i.test(
          values.email
        )
      ) {
        errors.email =
          'Email must contain only Latin letters, may contain digits and/or special symbols';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 symbols long';
      } else if (values.password.length > 32) {
        errors.password = 'Password must be at most 32 symbols long';
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>\?]).{8,32}$/i.test(
          values.password
        )
      ) {
        errors.password =
          'Password does not comply with the required template. Please, write a valid password';
      }
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex
      bgGradient="linear(to-br, #DCE6FF 8.7%, #FFFFFF 123.75%)"
      px="7"
      py="8"
      rounded="md"
      w="460px"
    >
      <Box w="100%" align="center">
        <form onSubmit={formik.handleSubmit}>
          <InputGroup pos="relative" display="block">
            <Input
              pl="6"
              py="2.5"
              bg="white"
              border={formik.errors.email ? '1px solid #E0729B' : 'none'}
              color="blue.900"
              boxShadow="inset 1px 1px 1px rgba(92, 129, 225, 0.32)"
              size="md"
              type="email"
              name="email"
              required
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              _placeholder={{ color: 'gray', fontSize: '20px' }}
              value={formik.values.email}
            />
            {/* <InputRightElement
              children={<FaStarOfLife color="red" size={5} />}
            /> */}
            <Box
              h="5"
              my="4px"
              align="left"
              fontSize="14px"
              color="red.400"
              lineHeight="none"
            >
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </Box>
          </InputGroup>

          <InputGroup pos="relative" display="block">
            <Input
              pl="6"
              py="2.5"
              bg="white"
              border={formik.errors.password ? '1px solid #E0729B' : 'none'}
              color="blue.900"
              boxShadow="inset 1px 1px 1px rgba(92, 129, 225, 0.32)"
              size="md"
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              id="user-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
              _placeholder={{ color: 'gray', fontSize: '20px' }}
              value={formik.values.password}
            />

            <InputRightElement
              pr="4"
              as="button"
              type="button"
              onClick={handleTogglePassword}
              className={css.Password_btn}
            >
              {showPassword ? (
                <AiOutlineEye size={30} />
              ) : (
                <RiEyeCloseLine size={30} />
              )}
            </InputRightElement>

            <Box
              h="10"
              my="4px"
              align="left"
              fontSize="14px"
              color="red.400"
              lineHeight="none"
            >
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </Box>
          </InputGroup>

          <Button type="submit">Sign in</Button>
        </form>
        <div className={css.Forgot_pass}>Forgot password?</div>
        <div className={css.Create_acc}>
          Don’t have an acount yet?
          <button type="button" className={css.Create_desr} onClick={isOnLogin}>
            Create your account here.
          </button>
          <br />
          It will take less than two minutes.
        </div>
      </Box>
    </Flex>
  );
};
