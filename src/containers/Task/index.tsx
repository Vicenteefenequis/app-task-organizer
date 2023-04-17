import React from 'react';
import { Header } from '#/components';
import { Container } from '@chakra-ui/react';

function Task() {
  return (
    <Container maxW="container.lg" bg="gray.400" mt={'24px'}>
      <Header name="Vicente Nascimento" tasks={2} />
    </Container>
  );
}

export default Task;
