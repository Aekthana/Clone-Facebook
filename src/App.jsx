import axios from 'axios'
import Aside from './component/Aside'
import Header from './component/Header'
import Main from './component/Main'
import Navbar from './component/Navbar'
import '/src/scrollstyle.css'

function App() {
  
  axios.get('https://reqres.in/api/users/1')
  .then(response => {
    console.log(response.data.data)
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <div className="App text-gray-900 ">
      <div className='relative bg-green-500 h-12 z-50'>
        <Header></Header>
      </div>
      <div className=' flex justify-center relative w-full h-screen bg-green-500'>
        <Navbar></Navbar>
        <Main></Main>
        <Aside></Aside>
      </div>

    </div>
  )
}

export default App
