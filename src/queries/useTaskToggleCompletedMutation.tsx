import { Task } from '#/models/task';
import { patchToggleCompleted } from '#/services/patchToggleCompleted';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useTaskToggleCompletedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => patchToggleCompleted(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });
      // const previousTask = queryClient.getQueryData<Task.Model>(['task', id]);
      queryClient.setQueryData<Task.List>(['tasks'], (old) => {
        if (!old) return;
        return {
          ...old,
          items: old?.items.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                is_completed: !task.is_completed,
              };
            }
            return task;
          }),
        };
      });
      // return { previousTask };
    },
  });
};
