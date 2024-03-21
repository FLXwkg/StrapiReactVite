import { Button } from '@nextui-org/react'
// import { useAuth } from '../../contexts/authContext'

function Header () {
  // const { isLoggedIn } = useAuth()
  return (
    <header className='flex flex-row w-full p-3 justify-around' color=''>
      <nav className='flex w-full align-center gap-9 ms-20 font-medium'>
        <a href='/'>Home</a>
        <a href='/artisans'>Artisans</a>
        <a href='/services'>Services</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
      <Button className='ms-80' type='button'>
        <a href='/authentication'>Connexion</a>
      </Button>
    </header>
  )
}
export default Header
