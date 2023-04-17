import { deletTask } from '#/services/deleteTask';
import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

export const useTaskDeleteMutation = () => {
  const toast = useToast();
  return useMutation({
    mutationKey: ['delete-task'],
    mutationFn: deletTask,
    onSuccess: () => {
      toast({
        title: 'Tarefa deletada com sucesso',
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
      } else {
        toast({
          title: 'Erro ao deletar tarefa',
          position: 'top-right',
          isClosable: true,
          status: 'error',
        });
      }
    },
  });
};
