import { Routes, Route } from 'react-router-dom'
import { HomePage, CreatePostPage } from './pages'
import { Navbar } from './components'

function App() {

  return (
    <>
      <Navbar/>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/create' element={<CreatePostPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
