import { Task } from '#/models/task';
import { postTask } from '#/services/postTask';
import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

export const useTaskMutation = () => {
  const toast = useToast();
  return useMutation({
    mutationKey: ['task'],
    mutationFn: async (task: Task.Input) => postTask(task),
    onSuccess: () => {
      toast({
        title: 'Tarefa criada com sucesso',
        position: 'top-right',
        isClosable: true,
        status: 'success',
      });
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast({
          title: error.response?.data.message,
          position: 'top-right',
          isClosable: true,
          status: 'error',
        });
      }
      toast({
        title: 'Erro ao criar tarefa',
        position: 'top-right',
        isClosable: true,
        status: 'error',
      });
    },
  });
};
