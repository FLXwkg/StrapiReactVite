import Button from "./buttons/Button";
import Input from "./inputs/Input";

function RegisterForm() {
    return ( 
        <form>
            <Input label='Nom' placeholder='Entrez votre Nom'/>
            <Button type="submit">{"S'enregistrer"}</Button>
        </form>
     );
}

export default RegisterForm;