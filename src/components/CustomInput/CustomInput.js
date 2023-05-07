import { Icon, Flex, FormLabel, Text, useCheckbox } from '@chakra-ui/react';
import LogoSvg from 'img/sprite.svg';

export const CustomInput = ({ type, label, onChange, isChecked }) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox({
      type: type,
      label: label,
      isChecked: isChecked,
      onChange: onChange,
    });

  return (
    <FormLabel
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      cursor="pointer"
      mx="auto"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="#FFFFFF"
        boxShadow="inset 1px 1px 1px rgba(92, 129, 225, 0.32)"
        minW="20px"
        minH="20px"
        mr="20px"
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Icon
            width={3}
            height={3}
            color="blue.400"
            fill="transparent"
            stroke="currentColor"
          >
            <use href={LogoSvg + '#icon-check'}></use>
          </Icon>
        )}
      </Flex>
      <Text color="blue.600" {...getLabelProps()}>
        {label}
      </Text>
    </FormLabel>
  );
};
