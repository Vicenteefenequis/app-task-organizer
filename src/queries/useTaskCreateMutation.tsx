import { postTasks } from '#/service/postTasks';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useTaskCreateMutation = () => {
  const toast = useToast();

  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['tasks'],
    mutationFn: postTasks,
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
