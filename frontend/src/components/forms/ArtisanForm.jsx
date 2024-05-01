import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/authContext'
import PropTypes from 'prop-types'
import { createArtisan, uploadPicture } from '../../services/api'

function ArtisanForm ({ userId }) {
  const { error, loading, state: { jwt } } = useAuth()

  const [dataForm, setDataForm] = useState({
    name: 'Ewen le Développeur',
    description: 'Dev en alternance',
    profilePicture: '',
    slug: '',
    produits: [],
    user: userId
  })

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    setDataForm({
      ...dataForm,
      profilePicture: file
    })
  }

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const data = new FormData()
      data.append('name', data.name)
      data.append('description', data.description)
      data.append('profilePicture', data.profilePicture)
      data.append('user', data.userId)
      const pictureData = await uploadPicture(data.profilePicture)
      const updatedFormData = { ...data, profilePicture: pictureData.url }
      console.log('responseData :>> ', pictureData)
      /* createArtisan({ data: updatedFormData }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + jwt
        }
      }) */
      toast.success(`Formulaire soumis : ${data.name}`)
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error)
      toast.error('Une erreur est survenue lors de la soumission du formulaire.')
    }
  }

  return (
    <form className='flex flex-col gap-2'>
      <Input
        type='text'
        name='name'
        label="Nom d'artisan : "
        value={dataForm.name}
        onChange={handleChange}
        required
      />
      <Input
        name='description'
        label='Description : '
        value={dataForm.description}
        onChange={handleChange}
        required
      />
      <p>Photo de profil : </p>
      <input
        className=''
        type='file'
        name='profilePicture'
        accept='image/*'
        onChange={handleFileInputChange}
        required
      />
      {
        error && <p style={{ color: 'red' }}>{error}</p>
      }
      <Button isLoading={loading} type='submit' onClick={handleSubmit}>
        S'enregistrer
      </Button>
    </form>
  )
}
ArtisanForm.proptypes = {
  userId: PropTypes.number
}

export default ArtisanForm
