import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Filme from './Filme'

import Erro  from './Erro'

import Header from '../components/Header'

function RoutesApp() {
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filme/:id' element={<Filme/>} />

        <Route path='*' element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;