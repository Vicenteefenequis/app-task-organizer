export namespace Task {
  export type Input = {
    name: string;
    description: string;
    is_completed?: boolean;
    due_date_at: Date | null;
  };

  export type Model = {
    id: string;
    name: string;
    description: string;
    is_completed: boolean;
    due_date_at: string;
    updated_at: string;
    deleted_at: string;
  };

  export type Output = {
    currentPage: number;
    perPage: number;
    total: number;
    items: Model[];
  };
}
