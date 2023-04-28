import React, { useCallback, useMemo } from 'react';
import { Header, ModalForm } from '#/components';
import { Button, Container, useDisclosure } from '@chakra-ui/react';
import { useTaskListQuery } from '#/queries/useTaskListQuery';
import List from './components/List';
import { FiPlusCircle } from 'react-icons/fi';
import Form from './components/Form';
import { useTaskCreateMutation } from '#/queries/useTaskCreateMutation';
import { Task as TaskModel } from '#/model/task';

function Task() {
  const { data: tasks } = useTaskListQuery();
  const { mutate: mutateTaskCreate } = useTaskCreateMutation();

  const {
    onOpen: onOpenCreatedTask,
    isOpen: isOpenCreatedTask,
    onClose: onCloseCreatedTask,
  } = useDisclosure();

  const handleCreateTask = useCallback(
    (input: TaskModel.Input) => {
      mutateTaskCreate(input);
      onCloseCreatedTask();
    },
    [mutateTaskCreate, onCloseCreatedTask]
  );

  const quantityTasksToCompleted = useMemo(
    () => tasks?.items.filter((task) => !task.is_completed).length || 0,
    [tasks?.items]
  );

  return (
    <Container maxW="container.lg" bg="gray.400" mt={'24px'}>
      <Header name="Vicente Nascimento" tasks={quantityTasksToCompleted} />
      <Button
        color="black"
        variant="solid"
        mt={'24px'}
        mb={'24px'}
        leftIcon={<FiPlusCircle />}
        onClick={onOpenCreatedTask}
      >
        Adicionar Tarefa
      </Button>

      <List tasks={tasks?.items || []} />

      <ModalForm
        title="Criar nova tarefa"
        isOpen={isOpenCreatedTask}
        onClose={onCloseCreatedTask}
      >
        <Form onSubmit={handleCreateTask} />
      </ModalForm>
    </Container>
  );
}

export default Task;
