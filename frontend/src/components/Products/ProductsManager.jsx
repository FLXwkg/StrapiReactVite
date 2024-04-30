import PropTypes from 'prop-types'
import ProductsManagerItem from './ProductsManagerItem'

function ProductsManager ({ products }) {
  console.log('p2 :>> ', products)
  return (
    <div className='flex flex-col'>
      <h2 className='flex justify-center p-3 w-full font-semibold'>Liste de vos produits</h2>
      {products && products.length > 0
        ? (
          <div className='flex flex-row flex-wrap justify-center gap-5 py-3 px-20 w-full'>
            {
              products.map(prod => (
                <ProductsManagerItem key={prod.id} product={prod} />
              ))
            }
          </div>
          )
        : (
          <p className='text-center text-gray-600'>Aucun produit trouvé.</p>
          )}
    </div>
  )
}
ProductsManager.propTypes = {
  products: PropTypes.array
}
export default ProductsManager
