import PropTypes from 'prop-types'
import ProductsListItem from './ProductsListItem'
// import './ProductsList.css'

function ProductsList ({ products }) {
  return (
    <>
      <div className='list-container'>
        <h2>Liste de produits</h2>
        <div className='list'>
          {
                        products.map(prod => (
                          <ProductsListItem key={prod.id} product={prod} />
                        ))
                    }
        </div>
      </div>
    </>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}
export default ProductsList
