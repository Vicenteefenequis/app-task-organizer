import { Task } from '#/models/task';
import {
  Card,
  Checkbox,
  HStack,
  Heading,
  VStack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

const Item: React.FC<Task.Model> = ({
  id,
  name,
  description,
  is_completed,
  due_date_at,
}) => {
  return (
    <Card p={3} minW={'full'}>
      <HStack
        alignItems={'stretch'}
        justifyContent={'space-between'}
        spacing={4}
      >
        <HStack spacing={8} alignItems={'flex-start'}>
          <Checkbox checked={is_completed} />
          <VStack alignItems={'flex-start'}>
            <Heading size="xs" textTransform="uppercase">
              {name}
            </Heading>
            <Text pt="2" fontSize="sm" mt={0}>
              {description}
            </Text>
            <Text pt="2" fontSize="sm">
              {due_date_at}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems={'flex-start'}>
          <IconButton aria-label="Add to friends" icon={<FiEdit />} />
          <IconButton aria-label="Add to friends" icon={<FiTrash />} />
        </HStack>
      </HStack>
    </Card>
  );
};

export default Item;
