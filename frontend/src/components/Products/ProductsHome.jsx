import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react'
import PropTypes from 'prop-types'
import { useCart } from '../../contexts/cartContext'

function ProductsHome ({ product }) {
  const { addToCart, state } = useCart()
  const { name, description, pictures, price, artisan } = product.attributes
  const urls = []
  if (pictures.data) {
    pictures.data.forEach((picture, i) => {
      const url = picture?.attributes?.url
      urls[i] = process.env.REACT_APP_BASE_URL + url
    })
  }
  const artiButes = artisan.data?.attributes
  const ppLink = artiButes.profilePicture.data.attributes.formats.thumbnail.url
  const ppURL = process.env.REACT_APP_BASE_URL + ppLink

  const handleCart = () => {
    console.log('product :>> ', product)
    console.log('state :>> ', state)
    addToCart(product)
    console.log('state2 :>> ', state)
  }

  return (
    <Card className='w-80'>
      <CardHeader className='flex flex-row justify-around'>
        <h3 className='font-semibold text-center'>{name}</h3>
        <Button onClick={handleCart}>
          <ShoppingCartIcon className='w-5' />
          Ajouter
        </Button>
      </CardHeader>
      <CardBody className='flex items-center'>
        <img className='h-80 rounded-lg' src={urls[0]} />
        <p className='product-desc'>{description}</p>
      </CardBody>
      <CardFooter as={Link} href={`/artisans/${artiButes.slug} `}>
        <img src={ppURL} className='w-16 rounded-full' />
        <p className='font-semibold indent-20'>{price} €</p>
      </CardFooter>
    </Card>
  )
}

ProductsHome.propTypes = {
  product: PropTypes.object.isRequired
}
export default ProductsHome
