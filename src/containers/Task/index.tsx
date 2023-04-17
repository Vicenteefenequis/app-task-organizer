import React, { useCallback } from 'react';
import { Header, ModalForm } from '#/components';
import { Button, Container, useDisclosure } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import List from './components/List';
import { useTaskListQuery } from '#/queries/useTaskListQuery';
import CreateTaskForm from './components/Form';
import { useTaskMutation } from '#/queries/useTaskMutation';
import { Task as TaskModel } from '#/models/task';

function Task() {
  const { data: tasks } = useTaskListQuery();
  const { mutate: mutateTask } = useTaskMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateTask = useCallback(
    (task: TaskModel.Input) => {
      mutateTask(task);
      onClose();
    },
    [mutateTask, onClose]
  );

  return (
    <Container maxW="container.lg" bg="gray.400" mt={'24px'}>
      <Header name="Vicente Nascimento" tasks={2} />
      <Button
        colorScheme="whiteAlpha"
        leftIcon={<FiPlusCircle />}
        variant="solid"
        mt={'24px'}
        mb={'24px'}
        color="black"
        onClick={onOpen}
      >
        Adicionar nova tarefa
      </Button>

      {tasks && <List tasks={tasks.items} />}

      <ModalForm title="Criar nova tarefa" isOpen={isOpen} onClose={onClose}>
        <CreateTaskForm onSubmit={handleCreateTask} />
      </ModalForm>
    </Container>
  );
}

export default Task;
