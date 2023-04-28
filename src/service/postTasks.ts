import { request } from '#/api/requester';
import { Task } from '#/model/task';

export const postTasks = async (task: Task.Input): Promise<Task.Output> => {
  const { data } = await request().post<Task.Output>('/tasks', task);
  return data;
};
