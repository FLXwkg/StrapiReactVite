import { useEffect, useState } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authString = localStorage.getItem("AUTH");
    const AUTH = JSON.parse(authString);
    const token = AUTH?.jwt;
    if (token) navigate("/dashboard");
  }, []);

  return (
    <>
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <a onClick={() => setIsRegister(!isRegister)}>
        {!isRegister ? "Je n'ai pas de compte" : "J'ai déja un compte"}
      </a>
    </>
  );
}

export default Auth;
