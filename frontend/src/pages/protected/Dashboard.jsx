import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { Button } from '@nextui-org/react'
import { useFetchHeaders } from '../../hooks/Api'
import ArtisanProfile from '../../components/Artisan/ArtisanProfile'
import UserProfile from '../../components/User/UserProfile'

function Dashboard () {
  const navigate = useNavigate()
  const { logout, state: { user } } = useAuth()
  const { response } = useFetchHeaders('/users/me?populate=artisan.profilePicture')
  let isArtisan = false
  let artisan = {}
  if (response) {
    console.log('response :>> ', response)
    isArtisan = response.isArtisan
    artisan = response.artisan
  }
  const handleLogout = () => {
    logout()
    navigate('/authentication')
  }
  return (
    <div className='flex flex-col items-center gap-6'>
      <h1>Profil de {user.username}</h1>
      {isArtisan
        ? (
          <div className='flex flex-col items-center'>
            <ArtisanProfile artisan={artisan} />
            <UserProfile user={user} />
          </div>)
        : <UserProfile user={user} />}
      <Button onClick={handleLogout}>Se déconnecter</Button>
    </div>
  )
}

export default Dashboard
