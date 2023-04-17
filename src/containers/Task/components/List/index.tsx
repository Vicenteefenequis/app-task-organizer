import { Task } from '#/models/task';
import React from 'react';
import Item from '../Item';

type Props = {
  tasks: Task.Model[];
};

const List: React.FC<Props> = ({ tasks }: Props) => {
  if (!tasks.length) return <div>There is no tasks</div>;
  return (
    <div>
      {tasks.map((task) => (
        <Item {...task} />
      ))}
    </div>
  );
};

export default List;
