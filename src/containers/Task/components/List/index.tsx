import { Task } from '#/model/task';
import React from 'react';
import Item from '../Item';
import { VStack } from '@chakra-ui/react';

type Props = {
  tasks: Task.Model[];
};

const List: React.FC<Props> = ({ tasks }) => {
  if (!tasks.length) return <div>Empty Tasks</div>;
  return (
    <VStack mt={5} spacing={3}>
      {tasks?.map((response) => (
        <Item key={response.id} {...response} />
      ))}
    </VStack>
  );
};

export default List;
