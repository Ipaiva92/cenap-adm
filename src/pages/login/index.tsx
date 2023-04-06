import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import schema from "../../config/schemas/login.schema";
import image from '~images/logo-texto.png';
import './style.scss';

function Login() {
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
    !formState.isValid ? login() : console.log("Não és valido monkey");
    console.log(data);
  };

  return (
    <>
      <div className="login-container">
        <div className="main-box-login">
          <div className="logo">
            <img src={image} alt="logo do cenap" />
          </div>
          <div className="login-box">
            {isLoggedIn ? (
              <div>Esta ta logado</div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="box">
                  <label><p>Email:</p></label>
                  <input type="text" {...register("email", { required: true })} />
                  {errors.email && (
                    <span style={{ color: "red" }}>
                      {errors.email.message?.toString()}
                    </span>
                  )}          
                </div>
                <div className="box">
                  <label><p>Password:</p></label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="box">
                  <button type="submit" id="log"> Logar </button>
                </div>
              </form>
            )}
          </div>       
        </div>
      </div>
    </>
  );
}

export default Login;
