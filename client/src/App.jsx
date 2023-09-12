import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePostPage from './pages/CreatePostPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePostPage/>}/>
      </Routes>
    </>
  )
}

export default App
