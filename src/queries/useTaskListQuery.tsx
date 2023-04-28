import { getTasks } from '#/service/getTasks';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { isAxiosError } from 'axios';

export const useTaskListQuery = () => {
  const toast = useToast();

  return useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
    onError: (error) => {
      if (isAxiosError(error)) {
        toast({
          title: 'Error',
          position: 'top-right',
          isClosable: true,
          status: 'error',
        });
      }
    },
  });
};
