import { useSelector } from 'react-redux'
import Aside from './component/Aside'
import Header from './component/Header'
import Main from './component/Main'
import Navbar from './component/Navbar'
import '/src/App.css'
import Profile from './component/Profile'

function App() {
   
 

  return (
    <div className="App text-gray-900 ">
      {/* <div className='relative bg-green-500 h-12 z-50'>
        <Header></Header>
      </div>
      <div className=' flex justify-center relative w-full h-screen bg-green-500'>
        <Navbar></Navbar>
        <Main></Main>
        <Aside></Aside>
      </div> */}
      <Profile></Profile>
    </div>
  )
}

export default App
