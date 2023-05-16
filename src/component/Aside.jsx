import {
  faCaretDown,
  faEllipsis,
  faMagnifyingGlass,
  faMinimize,
  faPhone,
  faVideo,
  faVideoCamera,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../App";

const Aside = () => {
  const { allProfileFriend } = useContext(DataContext);

  return (
    <aside className="w-1/5 h-full fixed right-0  font-medium  text-base hover:overflow-y-scroll overflow-hidden bg-green-500">
      <div className="mt-5 ">
        <div>
          <p className="font-bold font-lg">ได้รับการสนับสนุน</p>
          <div className="p-1 flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center mt-2 hover:bg-pink-500 p-1 rounded-lg"
            >
              <div className="w-24  relative h-24 rounded-lg overflow-hidden">
                <iframe
                  src="https://giphy.com/embed/xT0xeIcaEqykFvaNfq"
                  className="w-full h-full absolute"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className=" px-2">
                <p>เรียนรู้เพิ่มเติม</p>
                <p className="text-xs">www.ufo999.com</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center mt-2 hover:bg-pink-500 p-1 rounded-lg"
            >
              <div className="w-24  relative h-24 rounded-lg overflow-hidden">
                <iframe
                  src="https://giphy.com/embed/xUOxfe6dGnq0Z6EBJ6"
                  className="w-full h-full absolute"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className=" px-2">
                <p>เรียนรู้เพิ่มเติม</p>
                <p className="text-xs">www.ufo999.com</p>
              </div>
            </a>
          </div>
        </div>
        <div className="p-1 mt-5">
          <div className="flex items-center ">
            <p className="font-bold font-lg">ผู้ติดต่อ</p>
            <div
              className="flex justify-end gap-1"
              style={{ marginLeft: "4rem" }}
            >
              <div className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-pink-500 p-5">
                <FontAwesomeIcon icon={faVideoCamera} />
              </div>
              <div className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-pink-500 p-5">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-pink-500 p-5">
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <ul>
              {allProfileFriend &&
                allProfileFriend.map((profile) => (
                  <li key={profile.id}>
                    <div className="flex items-center gap-2 hover:bg-pink-500 p-1 rounded-lg cursor-pointer">
                      <div
                        className="rounded-full w-7 h-7 bg-pink-400 flex items-end justify-end"
                        style={{
                          backgroundImage: `url(${profile.avatar})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="rounded-full w-2 h-2 bg-green-600"></div>
                      </div>

                      <p>{`${profile.first_name} ${profile.last_name}`}</p>
                    </div>
                  </li>
                ))}
              \
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed h-4/6 w-80 bg-green-400 right-20 bottom-0 rounded-md">
        <div className="flex border-b border-pink-500">
          <div className="flex justify-between items-center gap-1 hover:bg-green-500 p-1 pt-0 cursor-pointer rounded-lg " style={{width:"68%"}}>
            <div className="h-8 w-8 rounded-full bg-pink-500"></div>
            <div>
              <p className="">aekthana boonsawai</p>
              <p className="text-xs">ใช้งานเมื่อ 3 ชม.ที่แล้ว</p>
            </div>
            <div className="ml-1 text-pink-400 text-sm">
             <FontAwesomeIcon icon={faCaretDown}/>
            </div>
          </div>
          <div className="flex items-center text-lg text-pink-400 pr-1" style={{width:"32%"}} > 
              <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
               <FontAwesomeIcon icon={faPhone}/>
              </div>
              <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faVideo}/>
              </div>
              <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
               <FontAwesomeIcon icon={faMinimize}/>
              </div>
              <div className="w-7 h-7 rounded-full hover:bg-green-500 flex items-center justify-center">
               <FontAwesomeIcon icon={faX}/> 
              </div>
              {/* <FontAwesomeIcon icon={faVideo}/>
              <FontAwesomeIcon icon={faMinimize} />
              <FontAwesomeIcon icon={faX}/>    */}
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </aside>
  );
};
export default Aside;
