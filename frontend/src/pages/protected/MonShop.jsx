import ProductsManager from '../../components/Products/ProductsManager'
import { useFetch, useFetchHeaders } from '../../hooks/Api'

function MonShop () {
  const { response } = useFetchHeaders('/users/me?populate=artisan.profilePicture')
  let artisanSlug = ''
  if (response) {
    artisanSlug = response.artisan?.slug
  }
  const { response: products, error, loading} = useFetch(
    `/produits?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`)

  if (loading) return <h2>Loading ...</h2>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  console.log('products :>> ', products)
  return (
    <ProductsManager products={products} />
  )
}

export default MonShop
