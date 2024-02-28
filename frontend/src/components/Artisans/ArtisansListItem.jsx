import PropTypes from 'prop-types'

function ArtisansListItem ({ artisan }) {
  const { name, slug, description, profilePicture } = artisan.attributes
  const picturl =
    `${process.env.REACT_APP_BASE_URL}` + profilePicture?.data?.attributes?.url

  return (
    <>
      <div className='card'>
        <div className='card-author'>
          <img className='profile-picture' src={picturl} />
          <h3 className='author-name'>{name}</h3>
        </div>
        <a className='artisan-button' href={`/artisans/${slug} `}>
          Voir les articles
        </a>
        <p>{description}</p>
      </div>
    </>
  )
}

ArtisansListItem.propTypes = {
  artisan: PropTypes.object
}
export default ArtisansListItem
