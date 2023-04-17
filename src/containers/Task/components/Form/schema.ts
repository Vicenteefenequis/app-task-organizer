import * as Yup from 'yup';

export const CreateTaskSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  due_date_at: Yup.date().required('Data de vencimento é obrigatória'),
});
