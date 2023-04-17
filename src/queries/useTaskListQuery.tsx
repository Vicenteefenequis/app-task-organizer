import { useQuery } from '@tanstack/react-query';
import { getTasks } from '#/services/getTasks';

export const useTaskListQuery = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks(),
    staleTime: 1000 * 60 * 3, // 3 minutes
  });
};
