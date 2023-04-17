export namespace Task {
  export type Input = {
    name: string;
    description: string;
    is_completed: boolean;
    due_date_at: Date | null;
  };

  export type Model = {
    id: string;
    name: string;
    description: string;
    is_completed: boolean;
    due_date_at: string;
  };

  export type List = {
    items: Model[];
    current_page: number;
    per_page: number;
    total: number;
  };

  export type Output = {
    id: string;
  };
}