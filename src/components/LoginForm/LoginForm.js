import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import {
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { CustomButton, InputBox } from 'components';
import { validateEmail, validatePassword } from 'services';

export const LoginForm = ({ isOnLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      const errorEmail = validateEmail(values);
      if (!errorEmail) {
        setIsValid(prevState => ({ ...prevState, email: true }));
      } else {
        setIsValid(prevState => ({ ...prevState, email: false }));
        errors.email = errorEmail;
      }
      const errorPassword = validatePassword(values);
      if (!errorPassword) {
        setIsValid(prevState => ({ ...prevState, password: true }));
      } else {
        setIsValid(prevState => ({ ...prevState, password: false }));
        errors.password = errorPassword;
      }
      return errors;
    },
    onSubmit: values => {
      //  e.preventDefault();

      console.log(values);
    },
  });
  return (
    <Flex
      bgGradient="linear(to-br, #DCE6FF 8.7%, #FFFFFF 123.75%)"
      px="7"
      py="8"
      rounded="md"
      w="460px"
      mb="13vh"
    >
      <Box w="100%" align="center">
        <form onSubmit={formik.handleSubmit}>
          <InputGroup pos="relative" display="block">
            <InputBox
              formik={formik}
              placeholder="Enter your email"
              isValid={isValid.email}
              name="email"
              type="email"
            />
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
            <InputBox
              formik={formik}
              placeholder="Enter your password"
              isValid={isValid.password}
              name="password"
              type={showPassword ? 'text' : 'password'}
            />

            <InputRightElement
              pr="4"
              mt="0.5"
              as="button"
              type="button"
              onClick={handleTogglePassword}
              w="10"
              h="10"
              color="gray"
              cursor="pointer"
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

          <CustomButton type="submit" mb="6" disabled={false}>
            Sign in
          </CustomButton>
        </form>

        <div>
          <Text
            align="baseline"
            justify="center"
            mb="1"
            lineHeight="1.37"
            color="blue.900"
            fontSize="14px"
          >
            Don’t have an acount yet?
            <button type="button" cursor="pointer" onClick={isOnLogin}>
              <Text as="u" fontWeight="700" pl="3px" color="blue.900">
                Create your account here
              </Text>
            </button>
          </Text>

          <Text lineHeight="1.37" color="blue.900" fontSize="14px">
            It will take less than two minutes.
          </Text>
        </div>
      </Box>
    </Flex>
  );
};
