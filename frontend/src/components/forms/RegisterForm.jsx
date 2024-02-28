import { useState } from "react";
import Button from "./buttons/Button";
import Input from "./inputs/Input";
import "./Form.css";
import { validateRegisterForm } from "../../services/formAuthValidation";

function RegisterForm() {
  /* Version simple mais repetitive:
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')*/

  const [formData, setFormData] = useState({
    firstName: "Flex",
    lastName: "Wukong",
    email: "rastasinge2003@gmail.com",
    userName: "FLX",
    password: "COUCOU"
  });

  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    userName: null,
    password: null,
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const _errors = validateRegisterForm(formData)
    if(_errors){
        setErrors(_errors)
    }
    alert(`Formulaire soumis : ${formData.lastName} ${formData.firstName}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Input
        name="lastName"
        label="Nom : "
        placeholder="Entrez votre nom"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.firstName}
        required
      />
      <Input
        name="firstName"
        label="Prenom : "
        placeholder="Entrez votre prénom"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.lastName}
        required
      />
      <Input
        type="email"
        name="email"
        label="Email : "
        placeholder="Entrez votre Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      <Input
        name="userName"
        label="Pseudo : "
        placeholder="Entrez votre pseudo"
        value={formData.userName}
        onChange={handleChange}
        error={errors.userName}
        required
      />
      <Input
        type="password"
        name="password"
        label="Mot de passe : "
        placeholder="Entrez votre Prénom"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />
      <Button type="submit">{"S'enregistrer"}</Button>
    </form>
  );
}

export default RegisterForm;
