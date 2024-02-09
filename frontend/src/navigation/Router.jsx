import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Artisans from '../pages/Artisans'
import Home from '../pages/Home'
import Artisan from '../pages/Artisan'
function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='artisans'> {/*route nested*/}
                    <Route index element={<Artisans/>}/>
                    <Route path=':artisanSlug' element={<Artisan/>}/>
                </Route>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='services' element={<Services/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router