import { request } from '#/api/requester';
import { Task } from '#/models/task';

export const getTasks = async (): Promise<Task.List> => {
  const { data } = await request().get<Task.List>('/tasks');
  return data;
};
