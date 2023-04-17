import { request } from '#/api/requester';

export const deletTask = async (id: string) => {
  await request().delete(`/tasks/${id}`);
};
