import { useEffect, useState } from 'react'
import './App.css'
import ArtisansList from './components/Artisans/ArtisansList'

function App() {
  // On prépare la variable qui va stocker les composants
  const [artisans, setArtisans] = useState([])
  useEffect(()=>{
    // on recup les datas
    const getData = async () => {
      const response = await window.fetch('http://localhost:1337/api/artisans?populate=*')
      const data = await response.json()
      setArtisans(data.data)
    }
    getData()
  }, [])
  
  return (
    <>
      <ArtisansList artisans = {artisans}/>
    </>
  )
}


export default App
