import React, { useState } from 'react';
import { ListItem, Icon, Box, Text, Button } from '@chakra-ui/react';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';

import { CustomButton, SelectItem } from 'components';
import { ModalAttempts } from 'components/ModalAttempts/ModalAttempts';
import { useNavigate } from 'react-router-dom';

const Icons = {
  Fa,
  Si,
};
export const ListedItem = ({ language, id, icon }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ListItem
      px="20px"
      py="10px"
      bg="blue.50"
      borderRadius="5px"
      w="48%"
      textAlign="left"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="12px"
      >
        <Box
          py="5px"
          minW="164px"
          bg="white"
          borderRadius="12px"
          borderWidth="0.5px"
          borderColor="rgba(92, 129, 225, 0.8)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            width={35}
            height={35}
            as={Icons[icon.split('').splice(0, 2).join('')][icon]}
            color="blue.400"
            fill="currentColor"
            mr="7px"
          />
          <Text
            color="blue.400"
            fontWeight="700"
            fontSize="20px"
            lineHeight="1.3"
          >
            {language.full_name}
          </Text>
        </Box>
        <SelectItem
          language={language}
          key={id}
          setSelectedOption={setSelectedOption}
        />
        <CustomButton
          disabled={!selectedOption}
          variant="green"
          onClick={() => {
            navigate('/questions');
          }}
        >
          Test now
        </CustomButton>
      </Box>
      {selectedOption?.description && (
        <Text fontSize="12px" lineHeight="1.15" color="blue.400" mt="6px">
          {selectedOption.description}
        </Text>
      )}
      {selectedOption?.attempts && (
        <Button
          fontWeight="600"
          fontSize="12px"
          lineHeight="1.2"
          textDecoration="underline"
          color="blue.900"
          p="0"
          bg="transparent"
          h="auto"
          mt="6px"
          onClick={handleModal}
        >{`You took the test ${selectedOption.attempts.length} times`}</Button>
      )}
      {isModalOpen && (
        <ModalAttempts
          onClose={handleModal}
          option={selectedOption}
        ></ModalAttempts>
      )}
    </ListItem>
  );
};
