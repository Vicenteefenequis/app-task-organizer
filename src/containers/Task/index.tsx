import React from 'react';
import { Header } from '#/components';
import { Button, Container, useDisclosure } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import List from './components/List';
import { useTaskListQuery } from '#/queries/useTaskListQuery';

function Task() {
  const { data: tasks } = useTaskListQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    </Container>
  );
}

export default Task;
