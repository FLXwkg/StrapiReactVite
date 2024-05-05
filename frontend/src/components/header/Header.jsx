import { Button } from '@nextui-org/react'
import { useAuth } from '../../contexts/authContext'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Header () {
  const { state: { isLoggedIn } } = useAuth()
  return (
    <header className='flex flex-row w-full p-3 justify-around' color=''>
      <nav className='flex w-full align-center gap-9 ms-20 font-medium'>
        <a href='/'>Home</a>
        <a href='/artisans'>Artisans</a>
        <a href='/services'>Services</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
      {isLoggedIn
        ? (
          <div className='flex flex-row gap-3'>
            <Button className='ms-80' type='button'><a href='/authentication'>Mon profil</a></Button>
            <Button isIconOnly>
              <a href='/mon-panier'>
                <ShoppingCartIcon className='w-5' />
              </a>
            </Button>
          </div>
          )
        : (
          <div className='flex flex-row'>
            <Button><a href='/register'>S'inscrire</a></Button>
            <Button className='ms-80' type='button'>
              <a href='/authentication'>Connexion</a>
            </Button>
          </div>)}

    </header>
  )
}
export default Header
