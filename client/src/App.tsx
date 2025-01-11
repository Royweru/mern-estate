import {BrowserRouter, Routes , Route} from 'react-router-dom'

import Home from './pages/home'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { About } from './pages/about'
import { Profile } from './pages/profile'
import { Navbar } from './components/navbar'


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
