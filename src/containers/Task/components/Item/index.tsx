import { Task } from '#/models/task';
import {
  Card,
  Checkbox,
  HStack,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const Item: React.FC<Task.Model> = ({
  id,
  name,
  description,
  completed,
  dueDateAt,
}) => {
  return (
    <Card p={3}>
      <HStack alignItems={'stretch'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'flex-start'}>
          <Checkbox checked={completed} />
          <VStack alignItems={'flex-start'}>
            <Heading size="xs" textTransform="uppercase">
              {name}
            </Heading>
            <Text pt="2" fontSize="sm" mt={0}>
              {description}
            </Text>
            <Text pt="2" fontSize="sm">
              {dueDateAt}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems={'flex-start'} justifyContent={'flex-end'}>
          <Button
            colorScheme="whiteAlpha"
            leftIcon={<FiEdit />}
            variant="solid"
            color="black"
            padding={0}
          />
          <Button
            colorScheme="whiteAlpha"
            leftIcon={<FiTrash />}
            variant="solid"
            color="black"
            padding={0}
          />
        </HStack>
      </HStack>
    </Card>
  );
};

export default Item;
