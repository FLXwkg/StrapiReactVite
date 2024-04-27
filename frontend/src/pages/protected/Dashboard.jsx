import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { Button } from '@nextui-org/react'
import { useFetchHeaders } from '../../hooks/Api'

function Dashboard () {
  const navigate = useNavigate()
  const { logout, state: { user } } = useAuth()
  if (user.isArtisan) {
    const { response } = useFetchHeaders('/users/me?populate=*')
    console.log('response :>> ', response)
  }
  const handleLogout = () => {
    logout()
    navigate('/authentication')
  }
  return (
    <div className='flex flex-col items-center'>
      <h1>Profil de {user.username}</h1>
      {user.isArtisan
        // a modifier par la photo de l'artisan une fois la connexion operationnelle
        ? <img src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
        : <img src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />}
      <h3>Nom d'utilisateur : {user.username}</h3>
      <h3>Adresse mail : {user.email} </h3>
      <Button onClick={handleLogout}>Se déconnecter</Button>
    </div>
  )
}

export default Dashboard
