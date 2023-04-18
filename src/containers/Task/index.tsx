import React, { useCallback, useMemo } from 'react';
import { Header, ModalForm } from '#/components';
import { Button, Container, useDisclosure } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import List from './components/List';
import { useTaskListQuery } from '#/queries/useTaskListQuery';
import CreateTaskForm from './components/Form';
import { useTaskCreateMutation } from '#/queries/useTaskCreateMutation';
import { Task as TaskModel } from '#/models/task';

function Task() {
  const { data: tasks } = useTaskListQuery();
  const { mutate: mutateTask } = useTaskCreateMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateTask = useCallback(
    (task: TaskModel.Input) => {
      mutateTask(task);
      onClose();
    },
    [mutateTask, onClose]
  );

  const quantityTasksToCompleted = useMemo(
    () => tasks?.items.filter((task) => !task.is_completed).length || 0,
    [tasks?.items]
  );

  return (
    <Container maxW="container.lg" bg="gray.400" mt={'24px'}>
      <Header name="Vicente Nascimento" tasks={quantityTasksToCompleted} />
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
