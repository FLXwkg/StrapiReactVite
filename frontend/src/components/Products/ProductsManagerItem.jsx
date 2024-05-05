import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import ProductModifyForm from '../forms/ProductModifyForm'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'

function ProductsManagerItem ({ product }) {
  const { name, pictures, price, description } = product.attributes
  const urls = []
  if (pictures.data) {
    pictures.data.forEach((picture, i) => {
      const url = picture?.attributes?.url
      urls[i] = process.env.REACT_APP_BASE_URL + url
    })
  }

  const [isHovered, setIsHovered] = useState(false)
  const [isModifying, setIsModifying] = useState(false)

  const handleMouse = () => {
    setIsHovered(!isHovered)
  }

  const handleSetIsModifying = () => {
    setIsModifying(!isModifying)
  }

  return (
    product
      ? (isHovered
          ? (isModifying
              ? (<ProductModifyForm setIsModifying={setIsModifying} product={product} />)
              : (
                <Card onMouseLeave={handleMouse} className=' flex flex-col justify-center w-80 h-11/12 py-5'>
                  <CardBody className='flex flex-row justify-around items-center h-full'>
                    <Button color='success' onClick={handleSetIsModifying}>
                      <PencilSquareIcon className='w-5' />
                      Modifier
                    </Button>
                    <Button color='danger'>
                      Supprimer
                      <XCircleIcon className='w-5' />
                    </Button>
                  </CardBody>
                </Card>
                )
            )
          : (
            <Card className='w-80 h-11/12 overflow-y-hidden' onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
              <CardHeader>
                <h3 className='text-center'>{name}</h3>
              </CardHeader>
              <CardBody>
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    className='rounded-lg'
                    src={urls[0]}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                  />
                </div>
                <p className='text-center'>{price} €</p>
                <p className=' overflow-hidden text-ellipsis whitespace-pre-line max-h-24 leading-6'>{description}</p>
              </CardBody>
            </Card>
            )
        )
      : null
  )
}

ProductsManagerItem.propTypes = {
  product: PropTypes.object.isRequired
}
export default ProductsManagerItem
