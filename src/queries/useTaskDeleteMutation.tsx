import { deleteTask } from '#/service/deleteTask';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useTaskDeleteMutation = () => {
  const toast = useToast();

  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['task', 'delete'],
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
      toast({
        title: 'Successo ao criar tasks',
        position: 'top-right',
        isClosable: true,
        status: 'success',
      });
    },
  });
};
