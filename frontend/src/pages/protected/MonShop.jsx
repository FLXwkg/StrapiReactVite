import axios from 'axios'
import ProductsManager from '../../components/Products/ProductsManager'
import { useFetchHeaders } from '../../hooks/Api'
import { useEffect, useState } from 'react'
function MonShop () {
  const { response, isLoading, error: errorHeaders } = useFetchHeaders('/users/me?populate=artisan.profilePicture')
  const [products, setProducts] = useState()
  const [productsError, setProductsError] = useState()
  const artisanSlug = response?.artisan?.slug

  useEffect(() => {
    const getData = async () => {
      if (artisanSlug) {
        try {
          const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/produits?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`)
          if (response) setProducts(response.data?.data)
        } catch (e) {
          setProductsError(e)
        }
      }
    }
    getData()
  }, [artisanSlug])
  if (isLoading) return <h2>Loading ...</h2>
  if (errorHeaders) return <pre>{JSON.stringify(errorHeaders, null, 2)}</pre>

  console.log('products :>> ', products)
  return (
    <>
      {
        productsError
          ? (<p className='text-center text-gray-600'>Aucun produit trouvé.</p>)
          : (<ProductsManager products={products} />)
      }
    </>
  )
}

export default MonShop
