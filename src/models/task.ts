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

  export type List = Model[];
}
