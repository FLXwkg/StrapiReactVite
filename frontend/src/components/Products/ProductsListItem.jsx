import PropTypes from 'prop-types'

function ProductsListItem ({ product }) {
  const { name, description, pictures, price } = product.attributes
  const urls = []
  pictures.data.forEach((picture, i) => {
    const url = picture?.attributes?.url
    urls[i] = `http://localhost:1337${url}`
  })

  return (
    <div className='product-item'>
      <h3 className='product-name'>{name}</h3>
      <img className='product-pict' src={urls[0]} />
      <p className='product-price'>{price} €</p>
      <p className='product-desc'>{description}</p>
    </div>
  )
}

ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired
}
export default ProductsListItem
