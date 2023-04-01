import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Home () {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido ").required("Campo tem que ser obrigatorio"),
    password: yup.string().required("Campo tem que ser obrigatorio"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) 
  });


  const onSubmit = (data: any) => console.log(data);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Email:</label>
      <input type="text" {...register("email", { required: true })} />
      {errors.email && <span style={{color:"red"}}>{errors.email.message?.toString()}</span>}

      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <span style={{color:"red"}}>{errors.password.message?.toString()}</span>}
      <button type="submit" > Logar </button>
    </form>
    </>
  );
}

export default Home