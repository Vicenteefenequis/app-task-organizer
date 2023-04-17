import { DatePicker } from '#/components';
import { Task } from '#/models/task';
import { Box, Button, Input } from '@chakra-ui/react';
import { FormikProps, withFormik } from 'formik';
import React from 'react';

type FormProps = {
  onSubmit: (values: FormValues) => void;
};

type FormValues = Task.Input;

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  setFieldValue,
  values,
  errors,
  submitCount,
}) => {
  return (
    <Box
      display="flex"
      flexDir={'column'}
      as="form"
      onSubmit={handleSubmit}
      gap={4}
    >
      <Input
        value={values.name}
        placeholder="Nome"
        onChange={(e) => setFieldValue('name', e.target.value)}
      />
      <Input
        value={values.description}
        placeholder="Description"
        onChange={(e) => setFieldValue('description', e.target.value)}
      />
      <DatePicker
        value={values.due_date_at}
        onChange={(e) => setFieldValue('due_date_at', e)}
      />
      <Button type="submit" colorScheme={'blue'} mt={5}>
        Salvar
      </Button>
    </Box>
  );
};

const CreateTaskForm = withFormik<FormProps, FormValues>({
  enableReinitialize: true,
  handleSubmit: (values, { props, resetForm }) => {
    props.onSubmit(values);
    resetForm();
  },
  mapPropsToValues: () => ({
    name: '',
    description: '',
    is_completed: false,
    due_date_at: new Date(),
  }),
})(Form);

export default CreateTaskForm;
