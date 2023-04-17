import { request } from '#/api/requester';
import { Task } from '#/models/task';

export const postTask = async (task: Task.Input): Promise<Task.Output> => {
  const { data } = await request().post<Task.Output>('/tasks', task);
  return data;
};
