import { AlertDialog } from '#/components';
import { useTaskDeleteMutation } from '#/queries/useTaskDeleteMutation';
import {
  Card,
  HStack,
  Checkbox,
  VStack,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import React, { useCallback } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

type Props = {
  id: string;
  name: string;
  description: string;
  due_date_at: string;
  is_completed: boolean;
};

const Item: React.FC<Props> = ({
  id,
  name,
  description,
  due_date_at,
  is_completed,
}) => {
  const { mutate: mutateTaskDelete } = useTaskDeleteMutation();

  const {
    onOpen: onOpenDeleteTask,
    isOpen: isOpenDeleteTask,
    onClose: onCloseDeleteTask,
  } = useDisclosure();

  const handleDeleteTask = useCallback(() => {
    mutateTaskDelete(id);
    onCloseDeleteTask();
  }, [id, mutateTaskDelete, onCloseDeleteTask]);

  const overdueTask = moment
    .utc(due_date_at)
    .add(1, 'days')
    .isBefore(moment.utc());

  return (
    <Card p={3} minW={'full'}>
      <HStack
        alignItems={'stretch'}
        justifyContent={'space-between'}
        spacing={4}
      >
        <HStack spacing={8} alignItems={'flex-start'}>
          <Checkbox isChecked={is_completed} />
          <VStack alignItems={'flex-start'}>
            <Heading size="xs" textTransform="uppercase">
              {name}
            </Heading>
            <Text pt="2" fontSize="sm" mt={0}>
              {description}
            </Text>
            <Text
              fontSize="sm"
              color={overdueTask ? 'red' : 'black'}
              fontWeight="bold"
            >
              {moment.utc(due_date_at).format('DD/MM/YYYY')}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems={'flex-start'}>
          <IconButton aria-label="Add to friends" icon={<FiEdit />} />
          <IconButton
            aria-label="Add to friends"
            icon={<FiTrash />}
            onClick={onOpenDeleteTask}
          />
        </HStack>
      </HStack>
      <AlertDialog
        title="Deletar task"
        description="Tem certeza que deseja deletar a task?"
        isOpen={isOpenDeleteTask}
        onClose={onCloseDeleteTask}
        onConfirm={handleDeleteTask}
        colorSchemeConfirm="red"
      />
    </Card>
  );
};

export default Item;
