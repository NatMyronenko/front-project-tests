import React from 'react';
import { List } from '@chakra-ui/react';
import { ListedItem } from 'components/ListedItem/ListedItem';

export const SelectList = ({ languages }) => {
  return (
    <List display="flex" mx="auto" gap="7" flexWrap="wrap">
      {languages.map(item => (
        <ListedItem
          language={item}
          key={item.id}
          id={item.id}
          icon={item.icon}
        />
      ))}
    </List>
  );
};
