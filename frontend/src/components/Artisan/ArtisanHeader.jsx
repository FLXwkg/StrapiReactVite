import PropTypes from 'prop-types'

function ArtisanHeader ({ attributes }) {
  const picturl =
    `${process.env.REACT_APP_BASE_URL}` + attributes.profilePicture?.data?.attributes?.url

  return (
    <div className='artisan-header'>
      <div>
        <h1>{attributes.name}</h1>
      </div>
      <div>
        <img src={picturl} className='artisan-pp' />
      </div>
      <div className='artisan-desc'>
        <p>{attributes.description}</p>
      </div>
    </div>
  )
}

ArtisanHeader.propTypes = {
  attributes: PropTypes.object
}

export default ArtisanHeader
