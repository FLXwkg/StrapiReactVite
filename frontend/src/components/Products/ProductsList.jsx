import PropTypes from 'prop-types'
import ProductsListItem from './ProductsListItem'

function ProductsList ({ products }) {
  return (
    <>
      <div className='flex flex-col'>
        <h2 className='flex justify-center p-3 w-full font-semibold'>Liste de produits</h2>
        <div className='flex flex-row justify-center gap-5 py-3 px-20'>
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
