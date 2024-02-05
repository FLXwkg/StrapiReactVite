import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='services' element={<Services/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router