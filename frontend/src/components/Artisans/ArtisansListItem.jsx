import PropTypes from "prop-types";

function ArtisansListItem({ artisan }) {
  const { name, slug, description, profilePicture } = artisan.attributes;
  const picturl =
    "http://localhost:1337" + profilePicture?.data?.attributes?.url;

  return (
    <>
      <div className="card">
        <div className="card-author">
          <img className="profile-picture" src={picturl}></img>
          <h3 className="author-name">{name}</h3>
        </div>
        <a className="artisan-button" href={`/artisans/${slug} `}>
          Voir les articles
        </a>
        <p>{description}</p>
      </div>
    </>
  );
}

ArtisansListItem.propTypes = {
  artisan: PropTypes.object,
};
export default ArtisansListItem;
