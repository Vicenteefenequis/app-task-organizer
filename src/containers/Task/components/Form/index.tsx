import { DatePicker } from '#/components';
import { Task } from '#/model/task';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { FormikProps, withFormik } from 'formik';
import React, { useCallback } from 'react';
import { CreateTaskSchema } from './schema';

type FormValues = Task.Input;

type FormProps = {
  onSubmit: (values: FormValues) => void;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  errors,
  values,
  setFieldValue,
  submitCount,
}) => {
  const hasError = useCallback(
    (key: keyof FormValues) => submitCount > 0 && !!errors[key],
    [errors, submitCount]
  );

  return (
    <Box
      onSubmit={handleSubmit}
      display={'flex'}
      flexDirection={'column'}
      gap={5}
      as="form"
    >
      <FormControl isInvalid={hasError('name')}>
        <Input
          value={values.name}
          placeholder="Nome"
          onChange={(e) => setFieldValue('name', e.target.value)}
        />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={hasError('description')}>
        <Input
          value={values.description}
          placeholder="Description"
          onChange={(e) => setFieldValue('description', e.target.value)}
        />
        <FormErrorMessage>{errors.description}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={hasError('due_date_at')}>
        <DatePicker
          value={values.due_date_at}
          onChange={(date) => setFieldValue('due_date_at', date)}
          placeholder="Data de vencimento"
        />
        <FormErrorMessage>{errors.due_date_at}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="blue" mt={5}>
        Salvar
      </Button>
    </Box>
  );
};

const CreateTaskForm = withFormik<FormProps, FormValues>({
  handleSubmit: (values, { props, resetForm }) => {
    props.onSubmit(values);
    resetForm();
  },
  mapPropsToValues: () => ({
    name: '',
    description: '',
    is_completed: false,
    due_date_at: null,
  }),
  validationSchema: CreateTaskSchema,
})(Form);

export default CreateTaskForm;
