import React from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './comps/Navbar'
import History from './pages/History'
import Culture from './pages/Culture'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
    

    

    

    

    
 return(
    <div>
        
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/beach/Details/:id' element={<Details/>}/>
                <Route path='/culture/Details/:id' element={<Culture/>}/>
                <Route path='/history/Details/:id' element={<History/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    
 )
}

export default App;




