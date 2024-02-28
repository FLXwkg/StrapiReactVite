import { useEffect, useState } from "react";
import Input from "./inputs/Input";
import "./Form.css";
import useLogin from "../../hooks/Auth";
import Button from "./buttons/Button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    identifier: "flexhiro@sensei.jap",
    password: "123456",
  });
  const navigate = useNavigate();
  const { response, /*error, isLoading, */login } = useLogin();

  useEffect(() => {
    if(response && response.jwt){
      navigate('/dashboard')
    }
  }, [response])

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form className="form-container">
        <h2>Se connecter</h2>
        <Input
          name="identifier"
          type="email"
          label="Email : "
          placeholder="Entrez votre Email"
          value={formData.identifier}
          onChange={handleChange}
          //error={errors.email}
          required
        />
        <Input
          name="password"
          type="password"
          label="Mot de passe : "
          placeholder="Entrez votre mot de passe"
          value={formData.password}
          onChange={handleChange}
          //error={errors.email}
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          Se connecter
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
