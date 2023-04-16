import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  name: string;
  tasks: number;
};
const Header: React.FC<Props> = ({ name, tasks }) => {
  const tasksPlural = tasks > 1 ? 'tarefas' : 'tarefa';

  return (
    <Stack>
      <Heading>Bem vindo, {name}</Heading>
      <Text>
        Você tem {tasks} {tasksPlural} para finalizar.
      </Text>
    </Stack>
  );
};

export default Header;
