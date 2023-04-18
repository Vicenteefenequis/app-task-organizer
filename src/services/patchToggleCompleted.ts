import { request } from '#/api/requester';

export const patchToggleCompleted = async (id: string) => {
  await request().patch(`/tasks/${id}/toggle-completed`);
};
