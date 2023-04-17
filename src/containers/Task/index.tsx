import React from 'react';
import { Header } from '#/components';
import { Button, Container } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';
import List from './components/List';

function Task() {
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
      >
        Adicionar nova tarefa
      </Button>

      <List tasks={[]} />
    </Container>
  );
}

export default Task;
