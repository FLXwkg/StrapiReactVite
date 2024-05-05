import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { deleteProduit } from '../../services/api'
import { useAuth } from '../../contexts/authContext'
import axios from 'axios'

function DeleteProduct ({ setIsDeleting, productId, picturesId }) {
  const { state: { jwt } } = useAuth()

  const handleCancel = () => {
    setIsDeleting(false)
  }

  const handleDelete = async (event) => {
    try {
      event.preventDefault()
      const deleteUpload = (id) => axios.delete(`${process.env.REACT_APP_API_URL}/upload/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      if (picturesId.length !== 0) {
        picturesId.forEach(id => {
          deleteUpload(id)
        })
      }

      const response = await deleteProduit(productId, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.data.id) {
        toast.success('Produit supprimé avec succès')
      } else {
        toast.error(`Failed to delete product: ${response.statusText}`)
      }
      handleCancel()
      // window.location.reload()
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error)
      toast.error('Une erreur est survenue lors de la soumission du formulaire.')
    }
  }

  return (
    <Card className=' flex flex-col justify-center w-80 h-11/12 py-5'>
      <CardHeader>
        <h3 className='text-center'>Etes-vous sur de vouloir supprimer ce produit? <br /> Cette action est irréversible.</h3>
      </CardHeader>
      <CardBody className='flex flex-col justify-center items-center h-full gap-5'>
        <Button onClick={handleCancel}>
          Annuler
          <XCircleIcon className='w-5' />
        </Button>
        <Button color='danger' onClick={handleDelete}>
          Supprimer
          <XCircleIcon className='w-5' />
        </Button>
      </CardBody>
    </Card>
  )
}

DeleteProduct.propTypes = {
  setIsDeleting: PropTypes.func,
  artisanId: PropTypes.number,
  picturesId: PropTypes.array
}

export default DeleteProduct
