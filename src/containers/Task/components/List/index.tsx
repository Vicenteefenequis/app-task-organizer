import { Task } from '#/models/task';
import React from 'react';
import Item from '../Item';
import { VStack } from '@chakra-ui/react';

type Props = {
  tasks: Task.Model[];
};

const List: React.FC<Props> = ({ tasks }: Props) => {
  if (!tasks.length) return <div>There is no tasks</div>;
  return (
    <VStack spacing={4}>
      {tasks.map((task) => (
        <Item {...task} />
      ))}
    </VStack>
  );
};

export default List;
