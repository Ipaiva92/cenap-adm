import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email("Email inválido ").required("Campo tem que ser obrigatorio"),
  password: yup.string().min(8).required("Campo tem que ser obrigatorio"),
});

export default schema;