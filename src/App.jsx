import { createContext, useEffect, useState } from "react";
import Aside from "./component/Aside";
import Header from "./component/Header";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import "/src/App.css";
import axios from "axios";


export const DataContext  = createContext();

function App() {

  const [profile, setProfile] = useState()
  const [profileFriend, setProfileFriend] = useState()
  const [allProfileFriend, setAllProfileFriend] = useState([])

  useEffect(()=>{
    async function fetchProfile(){
      try{
        const response = await axios.get('https://reqres.in/api/users/10')
        setProfile(response.data.data)
      }catch(error){ 
        console.log(error)
      }
    }
    
    async function fetchProfileFriend(){
      try{
        const response = await axios.get('https://reqres.in/api/users/2')
        setProfileFriend(response.data.data)
      }
      catch(error){
        console.log(error)
      }
    }

    async function fetchProfileAllFriend(){
      try{
        const response = await axios.get('https://reqres.in/api/users?page=1')
        setAllProfileFriend(response.data.data)
      }
      catch(error){
        console.log(error)
      }
    }
    
    fetchProfile();
    fetchProfileFriend();
    fetchProfileAllFriend();
  },[])
  

  return (
    <DataContext.Provider value={{profile, profileFriend, allProfileFriend}}>
      <div className="App text-gray-900 ">
        <div className="relative bg-green-500 h-12 z-50">
          <Header></Header>
        </div>
        <div className=" flex justify-center relative w-full h-screen bg-green-500">
          <Navbar></Navbar>
          <Main></Main>
          <Aside></Aside>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
