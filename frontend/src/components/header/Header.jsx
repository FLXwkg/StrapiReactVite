import Button from "../forms/buttons/Button";
import "./Header.css";

function Header() {
  /*const authString = localStorage.getItem("AUTH");
  const AUTH = JSON.parse(authString);
  const token = AUTH?.jwt;*/
  return (
    <header className="header">
      <nav>
        <a href="/">Home</a>
        <a href="/artisans">Artisans</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        {//token ? (
          <Button type="button">
            <a href="/authentication">Connexion</a>
          </Button>
        /*) : (
          <p>oui</p>
        )*/}
      </nav>
    </header>
  );
}
export default Header;
