import PropTypes from 'prop-types'
import ArtisansListItem from './ArtisansListItem'
import './ArtisansList.css'

function ArtisansList({ artisans }){
    if(!artisans || artisans.length < 1){
        return 'No data !'
    }
    return (
        <>
            <div className='list-container'>
                <h2>Liste d&apos;Artisans</h2>
                <div className='list'>
                    {
                        artisans.map(art => (
                            <ArtisansListItem key={art.id} artisan={art}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

ArtisansList.propTypes = {
    artisans: PropTypes.arrayOf(PropTypes.object)
  }
export default ArtisansList