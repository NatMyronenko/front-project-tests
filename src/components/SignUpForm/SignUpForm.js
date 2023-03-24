import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { AiOutlineEye } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im';
import { FaStarOfLife } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';

export const SignUpForm = ({ isOnLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (values.firstName.length < 2) {
        errors.firstName = 'First name must be at least 2 symbols long.';
      } else if (values.firstName.length > 24) {
        errors.firstName = 'First name must be at most 24 symbols long.';
      } else if (
        !/^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/i.test(
          values.firstName
        )
      ) {
        errors.firstName =
          'First name must contain only Cyrillic or Latin characters, hyphen and/or space in the middle';
      }
      if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (values.lastName.length < 2) {
        errors.lastName = 'First name must be at least 2 symbols long.';
      } else if (values.lastName.length > 24) {
        errors.lastName = 'First name must be at most 24 symbols long.';
      } else if (
        !/^(?=.{2,24}$)[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:[- '][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/i.test(
          values.lastName
        )
      ) {
        errors.lastName =
          'Last name must contain only Cyrillic or Latin characters, hyphen and/or space in the middle';
      }
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
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>?]).{8,32}$/i.test(
          values.password
        )
      ) {
        errors.password =
          'Password does not comply with the required template. Please, write a valid password';
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
      px="5"
      py="18px"
      rounded="md"
      w="460px"
      mb="3vh"
    >
      <Box w="100%" align="center">
        <form onSubmit={formik.handleSubmit}>
          <InputGroup pos="relative" display="block">
            <Flex gap="10px">
              <Box pos="relative" flexGrow="1">
                <Input
                  pl="6"
                  py="2.5"
                  bg="white"
                  border={
                    formik.errors.firstName ? '1px solid #E0729B' : 'none'
                  }
                  color="blue.900"
                  boxShadow="inset 1px 1px 1px rgba(92, 129, 225, 0.32)"
                  size="md"
                  type="text"
                  name="firstName"
                  required
                  id="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your first name"
                  _placeholder={{ color: 'gray', fontSize: '20px' }}
                  value={formik.values.firstName}
                />
                <Box pos="absolute" top="6px" right="6px">
                  <FaStarOfLife color="red" size={5} />
                </Box>
              </Box>
              <Flex align="center">
                <ImInfo size={20} color="rgba(17, 31, 66, 0.56)" />
              </Flex>
            </Flex>
            <Box
              h="7"
              my="2px"
              align="left"
              fontSize="14px"
              color="red.400"
              lineHeight="none"
            >
              {formik.errors.firstName &&
                formik.touched.firstName &&
                formik.errors.firstName}
            </Box>
          </InputGroup>
          <InputGroup pos="relative" display="block">
            <Flex gap="10px">
              <Box pos="relative" flexGrow="1">
                <Input
                  pl="6"
                  py="2.5"
                  bg="white"
                  border={formik.errors.lastName ? '1px solid #E0729B' : 'none'}
                  color="blue.900"
                  boxShadow="inset 1px 1px 1px rgba(92, 129, 225, 0.32)"
                  size="md"
                  type="text"
                  name="lastName"
                  required
                  id="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your last name"
                  _placeholder={{ color: 'gray', fontSize: '20px' }}
                  value={formik.values.lastName}
                />
                <Box pos="absolute" top="6px" right="6px">
                  <FaStarOfLife color="red" size={5} />
                </Box>
              </Box>
              <Flex align="center">
                <ImInfo size={20} color="rgba(17, 31, 66, 0.56)" />
              </Flex>
            </Flex>
            <Box
              h="7"
              my="2px"
              align="left"
              fontSize="14px"
              color="red.400"
              lineHeight="none"
            >
              {formik.errors.lastName &&
                formik.touched.lastName &&
                formik.errors.lastName}
            </Box>
          </InputGroup>
          <InputGroup pos="relative" display="block">
            <Flex gap="10px">
              <Box pos="relative" flexGrow="1">
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
                <Box pos="absolute" top="6px" right="6px">
                  <FaStarOfLife color="red" size={5} />
                </Box>
              </Box>
              <Flex align="center">
                <ImInfo size={20} color="rgba(17, 31, 66, 0.56)" />
              </Flex>
            </Flex>
            <Box
              h="7"
              my="2px"
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
            <Flex gap="10px">
              <Box pos="relative" flexGrow="1">
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
                <Box pos="absolute" top="6px" right="6px">
                  <FaStarOfLife color="red" size={5} />
                </Box>

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
              </Box>
              <Flex align="center">
                <ImInfo size={20} color="rgba(17, 31, 66, 0.56)" />
              </Flex>
            </Flex>
            <Box
              h="7"
              my="2px"
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

          <Button
            type="submit"
            bg="blue.400"
            px="27px"
            py="11px"
            fontSize="20px"
            fontWeight="700"
            lineHeight="base"
            color="white"
            mb="7"
          >
            Sign up
          </Button>
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
            Have an account already?
            <button type="button" cursor="pointer" onClick={isOnLogin}>
              <Text as="u" fontWeight="700" pl="3px" color="blue.900">
                Sign in here
              </Text>
            </button>
          </Text>
        </div>
      </Box>
    </Flex>
  );
};
