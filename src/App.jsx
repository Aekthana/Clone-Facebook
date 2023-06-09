import { createContext, useEffect, useState } from "react";
import Aside from "./component/Aside";
import Header from "./component/Header";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import "/src/App.css";
import axios from "axios";
import Chat from "./component/Chat";


export const DataContext  = createContext();

function App() {

  const [profile, setProfile] = useState()
  const [profileFriend, setProfileFriend] = useState()
  const [allProfileFriend, setAllProfileFriend] = useState([])
  const [switchChat, setSwitchChat] = useState(false);
  const [paramChat, setParamChat] = useState(1);
  const [profileChat, setProfileChat] = useState();
  const [post, setPost] = useState();

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
    async function fetchPost(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(response.data)
      }
      catch(error){
        console.log(error)
      }
    }

   

    
    fetchProfile();
    fetchProfileFriend();
    fetchProfileAllFriend();
    fetchPost()
  },[])

  useEffect(()=>{
    async function fetchProfileChat(){
      try{
        const response = await axios.get(`https://reqres.in/api/users/${paramChat}`)
        setProfileChat(response.data.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchProfileChat();

  },[paramChat])
  

  return (
    <DataContext.Provider value={{profile, profileFriend, allProfileFriend, setSwitchChat, setParamChat, profileChat, post}}>
      <div className="App text-gray-900 ">
        <div className="relative bg-green-500 h-12 z-50">
          <Header></Header>
        </div>
        <div className=" flex justify-center relative w-full h-screen bg-green-500">
          <Navbar></Navbar>
          <Main></Main>
          <Aside></Aside>
        </div>
        {switchChat && (<Chat></Chat>)}
      </div>
    </DataContext.Provider>
  );
}

export default App;
