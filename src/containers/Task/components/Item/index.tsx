import { AlertDialog } from '#/components';
import { Task } from '#/models/task';
import { useTaskDeleteMutation } from '#/queries/useTaskDeleteMutation';
import { useTaskToggleCompletedMutation } from '#/queries/useTaskToggleCompletedMutation';
import {
  Card,
  Checkbox,
  HStack,
  Heading,
  VStack,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import moment from 'moment';

const Item: React.FC<Task.Model> = ({
  id,
  name,
  description,
  is_completed,
  due_date_at,
}) => {
  const { mutate: mutateTaskDelete } = useTaskDeleteMutation();
  const { mutate: mutateToggleCompleted } = useTaskToggleCompletedMutation();

  const {
    onClose: onCloseDeleteTask,
    onOpen: onOpenDeleteTask,
    isOpen: isOpenDeleteTask,
  } = useDisclosure();

  const handleDeleteTask = useCallback(() => {
    mutateTaskDelete(id);
  }, [id, mutateTaskDelete]);

  const handleToggleCompleted = useCallback(() => {
    mutateToggleCompleted(id);
  }, [id, mutateToggleCompleted]);

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
          <Checkbox onChange={handleToggleCompleted} isChecked={is_completed} />
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
