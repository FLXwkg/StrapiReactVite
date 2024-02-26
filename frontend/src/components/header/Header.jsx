import Button from '../forms/buttons/Button'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <nav>
            <a href='/'>Home</a>
            <a href='/artisans'>Artisans</a>
            <a href='/services'>Services</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
            <Button type='button'>
              <a href="/authentication">
              Connexion
              </a>
            </Button>
        </nav>
    </header>
    
  )
}
export default Header
