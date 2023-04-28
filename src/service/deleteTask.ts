import { request } from '#/api/requester';
import { Task } from '#/model/task';

export const deleteTask = async (id: string) => {
  return await request().delete<Task.Output>(`/tasks/${id}`);
};
