import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import schema from "./login.schema";

function Home() {
  const { isLoggedIn, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {}) => {
    formState.isValid ? login() : console.log("Não és valido monkey");
    console.log(data);
  };

  return (
    <>
      {isLoggedIn ? (
        <div>Esta ta logado</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email:</label>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && (
            <span style={{ color: "red" }}>
              {errors.email.message?.toString()}
            </span>
          )}

          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>
              {errors.password.message?.toString()}
            </span>
          )}
          <button type="submit"> Logar </button>
        </form>
      )}
    </>
  );
}

export default Home;
