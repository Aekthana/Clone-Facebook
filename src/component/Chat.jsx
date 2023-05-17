import {
  faCaretDown,
  faCirclePlus,
  faEllipsis,
  faFaceSmile,
  faGift,
  faImage,
  faMagnifyingGlass,
  faMinimize,
  faNoteSticky,
  faPhone,
  faThumbsUp,
  faVideo,
  faVideoCamera,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../App";

export default function Chat() {

const { setSwitchChat, profileChat} = useContext(DataContext);
 
const handleSwitchChat = ()=>{
    setSwitchChat(false)
} 

  return (
    <>
      <div className="fixed h-3/5 w-80 bg-green-400 right-20 bottom-9 rounded-md">
        <div className="flex border-b border-pink-500">
          <div
            className="flex justify-between items-center gap-1 hover:bg-green-500 p-1 pt-0 pr-2 cursor-pointer rounded-lg "
            style={{ width: "60%" }}
          >
            <img src={profileChat.avatar} className="h-8 w-8 rounded-full bg-pink-500"></img>
            <div>
              <p className="">{`${profileChat.first_name} ${profileChat.last_name}`}</p>
              <p className="text-xs">ใช้งานเมื่อ 3 ชม.ที่แล้ว</p>
            </div>
            <div className="ml-1 text-pink-500 text-sm ">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div
            className="flex items-center text-lg text-pink-500 pr-1 pl-3"
            style={{ width: "40%" }}
          >
            <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faMinimize} />
            </div>
            <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center" onClick={handleSwitchChat}>
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll h-5/6 "></div>
        <div className="p-1 flex h-14 items-center bg-green-400 gap-2  ">
          <div className="rounded-full h-7 w-7 text-xl flex justify-center items-center cursor-pointer hover:bg-green-500 text-pink-500">
            <FontAwesomeIcon icon={faCirclePlus}/>
          </div>
          <div className="rounded-full h-7 w-7 text-xl flex justify-center items-center cursor-pointer hover:bg-green-500 text-pink-500">
            <FontAwesomeIcon icon={faImage}/>
          </div>
          <div className="rounded-full h-7 w-7 text-xl flex justify-center items-center cursor-pointer hover:bg-green-500 text-pink-500">
            <FontAwesomeIcon icon={faNoteSticky}/>
          </div>
          <div className="rounded-full h-7 w-7 text-xl flex justify-center items-center cursor-pointer hover:bg-green-500 text-pink-500">
            <FontAwesomeIcon icon={faGift}/>
          </div>
         
          <div className="relative ">
            <input className="w-32 px-2 py-1 rounded-full" type="text" placeholder="Aa" />
            <div className="rounded-full h-7 w-7 absolute top-1/2 right-1 transform -translate-y-1/2 text-xl flex justify-center items-center cursor-pointer hover:bg-green-500 text-pink-500 ">
                <FontAwesomeIcon icon={faFaceSmile}/>
            </div>
          </div>
          <div className="rounded-full h-7 w-7 text-xl flex justify-center items-center cursor-pointer hover:bg-green-500 text-pink-500">
            <FontAwesomeIcon icon={faThumbsUp}/>
          </div>
        </div>
      </div>
    </>
  );
}
