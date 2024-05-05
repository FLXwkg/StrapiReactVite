import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { useState } from 'react'
import { XCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { updateProduit } from '../../services/api'
import { useAuth } from '../../contexts/authContext'
import axios from 'axios'

function ProductModifyForm ({ setIsModifying, product, artisanId }) {
  const { state: { jwt } } = useAuth()
  const attributes = product.attributes
  const urls = []
  const ids = []
  if (attributes.pictures.data) {
    attributes.pictures.data.forEach((picture, i) => {
      const url = picture?.attributes?.url
      urls[i] = process.env.REACT_APP_BASE_URL + url
      ids[i] = picture?.id
    })
  }
  const handleCancel = () => {
    setIsModifying(false) // Appeler setIsHovered pour modifier l'état du parent lorsque la souris quitte le formulaire
  }

  const [formData, setFormData] = useState({
    name: attributes.name,
    description: attributes.description,
    pictures: ids,
    price: attributes.price,
    artisan: artisanId
  })

  const [fileFormData, setFileFormData] = useState(new FormData())

  const handleFileInputChange = (event) => {
    const files = event.target.files
    if (files.length) {
      const updatedFileFormData = new FormData()
      Array.from(files).forEach(file => {
        updatedFileFormData.append('files', file)
      })
      setFileFormData(updatedFileFormData)
    }
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      let imageIds = []
      if (fileFormData.has('files')) {
        const uploadResponse = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, fileFormData, {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        imageIds = uploadResponse.data.map(file => file.id)
      }

      const productData = {
        data: {
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          pictures: imageIds,
          artisan: formData.artisan
        }
      }

      const response = await updateProduit(productData, product.id, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.data.id) {
        toast.success('Produit modifié avec succès')
      } else {
        toast.error(`Failed to update product: ${response.statusText}`)
      }
      handleCancel()
      window.location.reload()
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error)
      toast.error('Une erreur est survenue lors de la soumission du formulaire.')
    }
  }

  return (
    <form>
      <Card className='w-80 h-11/12 py-5'>
        <CardHeader className='flex flex-row justify-around'>
          <Button color='success' onClick={handleSubmit}>
            <PencilSquareIcon className='w-5' />
            Modifier
          </Button>
          <Button onClick={handleCancel}>
            Annuler
            <XCircleIcon className='w-5' />
          </Button>
        </CardHeader>
        <CardBody className='flex flex-col justify-center gap-4'>
          <Input
            type='text'
            name='name'
            label='Nom de produit : '
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type='text'
            name='description'
            label='Description : '
            value={formData.description}
            onChange={handleChange}
            required
          />
          <Input
            type='number'
            name='price'
            label='Prix : '
            value={formData.price}
            onChange={handleChange}
            required
          />
          <div className='flex flex-row'>
            <p className='text-sm pl-4'>Photo:</p>
            <div className='flex flex-row'>
              {urls[0]
                ? (<img
                    className='rounded-lg w-10'
                    src={urls[0]} alt='Aucune image'
                   />)
                : (
                  <img
                    className='rounded-lg w-40'
                    src={urls[0]} alt='Aucune image'
                  />
                  )}
            </div>
          </div>
          <input
            className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0'
            type='file'
            name='pictures'
            accept='image/*'
            onChange={handleFileInputChange}
            required
          />
        </CardBody>
      </Card>
    </form>
  )
}

ProductModifyForm.propTypes = {
  product: PropTypes.object,
  artisanId: PropTypes.number
}

export default ProductModifyForm
