import { request } from '#/api/requester';
import { Task } from '#/model/task';

export const getTasks = async () => {
  return (
    await request().get<Task.Output>(
      '/tasks?sort=createdAt&dir=desc&perPage=10'
    )
  ).data;
};
