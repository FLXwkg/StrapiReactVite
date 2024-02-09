import { useParams } from "react-router-dom";

function Artisan() {
    const { artisanSlug } = useParams()
    return ( 
        <h1>Artisan : {artisanSlug}</h1>
     );
}

export default Artisan;