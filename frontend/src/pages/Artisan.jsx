import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/Api";
import ArtisanHeader from "../components/Artisan/ArtisanHeader.Jsx";
import "../components/Artisan/Artisan.css"
import ProductsList from "../components/Products/ProductsList";

function Artisan() {
  const { artisanSlug } = useParams();
  const { response, error, loading } = useFetch(
    `http://localhost:1337/api/artisans?filters[slug][$eq]=${artisanSlug}&populate=*`
  );
  const { response: products, error: productsError, loading: productsLoading } = useFetch(
        `http://localhost:1337/api/produits?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`
    );
  if (loading || productsLoading) return <h1>Chargement...</h1>;
  if (error || productsError) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return response && (
      <>
        <ArtisanHeader attributes={response[0]?.attributes} />
        {
            products? (
                <ProductsList products={products}></ProductsList>
            ):<p>Aucun produit trouvé</p>
        }
      </>
  );
}

export default Artisan;
