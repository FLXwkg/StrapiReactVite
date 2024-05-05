import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import PropTypes from 'prop-types'
import { useCart } from '../../contexts/cartContext'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function ProductsListItem ({ product }) {
  const { addToCart } = useCart()
  const { name, description, pictures, price } = product.attributes
  const urls = []
  if (pictures.data) {
    pictures.data.forEach((picture, i) => {
      const url = picture?.attributes?.url
      urls[i] = process.env.REACT_APP_BASE_URL + url
    })
  }
  const handleCart = () => {
    addToCart(product)
  }

  return (
    <Card className='w-80'>
      <CardHeader className='flex flex-row justify-around'>
        <h3 className='text-center'>{name}</h3>
        <Button onClick={handleCart}>
          <ShoppingCartIcon className='w-5' />
          Ajouter
        </Button>
      </CardHeader>
      <CardBody>
        <img className='rounded-lg' src={urls[0]} />
        <p className='product-price text-center'>{price} €</p>
        <p className='product-desc'>{description}</p>
      </CardBody>
    </Card>
  )
}

ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired
}
export default ProductsListItem
