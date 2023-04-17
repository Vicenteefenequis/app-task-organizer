export namespace Task {
  export type Input = {
    name: string;
    description: string;
    completed: boolean;
    dueDateAt: string;
  };

  export type Model = {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    dueDateAt: string;
  };

  export type List = {
    items: Model[];
    current_page: number;
    per_page: number;
    total: number;
  };
}
