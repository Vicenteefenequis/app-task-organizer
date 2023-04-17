export namespace Task {
  export type Input = {
    name: string;
    description: string;
    completed: boolean;
    due_date_at: Date;
  };

  export type Model = {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    due_date_at: string;
  };

  export type List = {
    items: Model[];
    current_page: number;
    per_page: number;
    total: number;
  };
}
