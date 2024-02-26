import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/Api";
import ArtisanHeader from "../components/Artisan/ArtisanHeader.Jsx";
import "../components/Artisan/Artisan.css"

function Artisan() {
  const { artisanSlug } = useParams();
  const { response, error, loading } = useFetch(
    `http://localhost:1337/api/artisans?filters[slug][$eq]=${artisanSlug}&populate=*`
  );
  if (loading) return <h1>Chargement...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    response && (
      <>
        <ArtisanHeader attributes={response[0]?.attributes} />
      </>
    )
  );
}

export default Artisan;
