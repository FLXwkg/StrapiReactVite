import { Card, CardBody, CardHeader } from '@nextui-org/react'
import PropTypes from 'prop-types'

function UserProfile ({ user }) {
  return (
    <div className='flex flex-col items-center'>
      <Card className='flex flex-col items-center w-1/3'>
        <CardHeader className='flex flex-col items-center font-semibold'>
          Votre profil utilisateur :
        </CardHeader>
        <CardBody className='w-80'>
          <h1>Nom : {user.name}</h1>
          <h2>Email : {user.email}</h2>
          <img className='rounded-md' src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
        </CardBody>
      </Card>
    </div>
  )
}
UserProfile.propTypes = {
  user: PropTypes.object
}
export default UserProfile
