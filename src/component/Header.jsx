import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faCaretDown,
  faCircleQuestion,
  faCommentDots,
  faEllipsis,
  faGear,
  faMagnifyingGlass,
  faMaximize,
  faMessage,
  faMoon,
  faPenToSquare,
  faRightFromBracket,
  faUser,
  faVideo,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Profiler, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../App";
import { compose } from "@reduxjs/toolkit";

const Header = () => {
  const { profile, profileFriend, allProfileFriend,setSwitchChat, setParamChat} = useContext(DataContext);

  const [dropDownProfile, setDropDownProfile] = useState(false);
  const [dropDownBell, setDropDownBell] = useState(false);
  const [dropDownMessage, setDropDownMessage] = useState(false);
  const [dropDownSearch, setDropDownSearch] = useState(false);
  const [activeBell, setActiveBell] = useState(3);
  const [activeMessage, setActiveMessage] = useState(1);

  const dropDownProfileRef = useRef(null);
  const dropDownToggleProfileRef = useRef(null);
  const dropDownBellRef = useRef(null);
  const dropDownToggleBellRef = useRef(null);
  const dropDownMessageRef = useRef(null);
  const dropDownToggleMessageRef = useRef(null);
  const dropDownSearchRef = useRef(null);
  const dropDownToggleSearchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropDownProfileRef.current &&
        !dropDownProfileRef.current.contains(event.target)
      ) {
        setDropDownProfile(false);
        if (
          dropDownToggleProfileRef.current &&
          dropDownToggleProfileRef.current.contains(event.target)
        ) {
          setDropDownProfile(true);
        }
      }

      if (
        dropDownBellRef.current &&
        !dropDownBellRef.current.contains(event.target)
      ) {
        setDropDownBell(false);
        if (
          dropDownToggleBellRef.current &&
          dropDownToggleBellRef.current.contains(event.target)
        ) {
          setDropDownBell(true);
        }
      }

      if (
        dropDownMessageRef.current &&
        !dropDownMessageRef.current.contains(event.target)
      ) {
        setDropDownMessage(false);
        if (
          dropDownToggleMessageRef.current &&
          dropDownToggleMessageRef.current.contains(event.target)
        ) {
          setDropDownMessage(true);
        }
      }
      if (
        dropDownSearchRef.current &&
        !dropDownSearchRef.current.contains(event.target)
      ) {
        setDropDownSearch(false);
        if (
          dropDownToggleSearchRef.current &&
          dropDownToggleSearchRef.current.contains(event.target)
        ) {
          setDropDownSearch(true);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    dropDownProfileRef,
    dropDownBellRef,
    dropDownMessageRef,
    dropDownSearchRef,
  ]);

  const handleClickSwitchChat = () =>{
    setSwitchChat(true)
    setDropDownMessage(!dropDownMessage);
    setParamChat(profileFriend.id);
  }
  const handleClickProfile = () => {
    setDropDownProfile(!dropDownProfile);
  };
  const handleClickBell = () => {
    setDropDownBell(!dropDownBell);
  };
  const handleClickMessage = () => {
    setDropDownMessage(!dropDownMessage);
  };
  const handleClickSearch = () => {
    setDropDownSearch(!dropDownSearch);
  };

  return (
    <header className="flex justify-between items-center px-4 py-1 bg-green-400  w-full border-b-2 border-pink-500 fixed top-0 left-0 right-0">
      <a  href="#" className="text-3xl font-bold">facebook</a>
      <form action="" className="relative">
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="ค้นหาบน Facebook"
            className="pl-10 pr-6 h-10 border-none  rounded-full shadow-inner text-sm sm:text-base bg-pink-400 focus:outline-none  hover:bg-pink-500"
            style={{ width: "30rem" }}
            ref={dropDownToggleSearchRef}
            onClick={handleClickSearch}
          />
          <label htmlFor="search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" absolute left-4 top-1/2 transform -translate-y-1/2 cursor-text"
            />
          </label>
        </div>
        {dropDownSearch && (
          <div
            className="absolute left-0 top-12 w-full"
            ref={dropDownSearchRef}
          >
            <div
              className="z-10 bg-green-400 rounded-lg shadow py-4 text-gray-900 overflow-y-auto"
              style={{ height: "30rem" }}
            >
              <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                  <p className=" font-bold">การค้นหาล่าสุด</p>
                  <p className=" font-bold text-sm text-pink-500 hover:bg-pink-500 p-2 rounded-md cursor-pointer">
                    แก้ไข
                  </p>
                </div>
                <ul>
                  {allProfileFriend && allProfileFriend.map((profile)=>(
                    ( <li className="mt-2 py-1 rounded-md hover:bg-pink-500 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img src={profile.avatar} className="rounded-full bg-pink-500 w-10 h-10"></img>
                        <p>{`${profile.first_name} ${profile.last_name}`}</p>
                      </div>
                      <div className="mr-3 w-7 h-7 text-xs rounded-full flex justify-center items-center hover:bg-pink-400 ">
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  </li>)
                  ))}
            
                 
                </ul>
              </div>
            </div>
          </div>
        )}
      </form>
      <div className="flex gap-1">
        <div className="relative">
          <div
            className={`h-10 w-10 rounded-full flex justify-center items-center  cursor-pointer hover:bg-pink-500 ${
              dropDownMessage ? "bg-pink-500 text-pink-500" : "bg-pink-400 "
            }`}
            onClick={handleClickMessage}
            ref={dropDownToggleMessageRef}
          >
            <FontAwesomeIcon icon={faMessage} />
          </div>
          {dropDownMessage && (
            <div className="absolute right-0 top-12 " ref={dropDownMessageRef}>
              <div className="z-10 bg-green-400 rounded-lg w-80 shadow py-4 text-gray-900 overflow-y-auto h-96">
                <div className="px-4 py-2">
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">แชท</h1>
                    <div className="text-lg flex gap-x-2">
                      <a
                        href="#"
                        className="hover:bg-pink-500 hover:text-pink-500 inline-block px-2 py-1 rounded-xl focus:bg-pink-500 focus:text-pink-500 "
                      >
                        <FontAwesomeIcon icon={faEllipsis} />
                      </a>
                      <a
                        href="#"
                        className="hover:bg-pink-500 hover:text-pink-500 inline-block px-2 py-1 rounded-xl focus:bg-pink-500 focus:text-pink-500 "
                      >
                        <FontAwesomeIcon icon={faMaximize} />
                      </a>
                      <a
                        href="#"
                        className="hover:bg-pink-500 hover:text-pink-500 inline-block px-2 py-1 rounded-xl focus:bg-pink-500 focus:text-pink-500 "
                      >
                        <FontAwesomeIcon icon={faVideo} />
                      </a>
                      <a
                        href="#"
                        className="hover:bg-pink-500 hover:text-pink-500 inline-block px-2 py-1 rounded-xl focus:bg-pink-500 focus:text-pink-500 "
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </a>
                    </div>
                  </div>
                  <div className="relative my-2">
                    <form action="">
                      <input
                        type="text"
                        id="search"
                        placeholder="ค้นหาบน Facebook"
                        className="pl-10 pr-6 h-7 border-none  rounded-full shadow-inner text-sm sm:text-base bg-pink-400 focus:outline-none focus:bg-pink-500 hover:bg-pink-500 w-full"
                      />
                      <label htmlFor="search">
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          className=" absolute left-4 top-1/2 transform -translate-y-1/2 cursor-text"
                        />
                      </label>
                    </form>
                  </div>
                  <div className="flex gap-x-2 my-3">
                    <a
                      href="#"
                      className={`hover:bg-pink-500 hover:text-pink-500 rounded-xl text-sm focus:bg-pink-500 focus:text-pink-500 ${
                        activeMessage === 1 ? "bg-pink-500 text-pink-500" : ""
                      } px-2 py-1`}
                      onClick={() => {
                        setActiveMessage(1);
                      }}
                    >
                      กล่องข้อความ
                    </a>
                    <a
                      href="#"
                      className={`hover:bg-pink-500 hover:text-pink-500 rounded-xl text-sm focus:bg-pink-500 focus:text-pink-500 ${
                        activeMessage === 2 ? "bg-pink-500 text-pink-500" : ""
                      } px-2 py-1`}
                      onClick={() => {
                        setActiveMessage(2);
                      }}
                    >
                      คอมมูนิตี้
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex items-center hover:bg-pink-500  rounded-xl py-2 px-1"
                      >
                        <div>
                          {profileFriend ? (
                            <div
                              className="h-14 w-14 rounded-full flex items-end justify-end col-span-1"
                              style={{
                                backgroundImage: `url(${profileFriend.avatar})`,
                                backgroundSize: "cover",
                              }}
                            >
                              <div className="h-4 w-4 bg-green-600 rounded-full"></div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="px-3 truncate" onClick={handleClickSwitchChat}>
                          {profileFriend ? (
                            <p>
                              {profileFriend.first_name}{" "}
                              {profileFriend.last_name}
                            </p>
                          ) : (
                            <></>
                          )}
                          {profileFriend ? (
                            <p className="text-xs">
                              {profileFriend.first_name}{" "}
                              {profileFriend.last_name} : HI{" "}
                              <span>-10 นาที</span>
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className={`h-10 w-10 rounded-full flex justify-center items-center  cursor-pointer hover:bg-pink-500 ${
              dropDownBell ? "bg-pink-500 text-pink-500" : "bg-pink-400 "
            }`}
            onClick={handleClickBell}
            ref={dropDownToggleBellRef}
          >
            <FontAwesomeIcon icon={faBell} />
          </div>
          {dropDownBell && (
            <div className="absolute right-0 top-12" ref={dropDownBellRef}>
              <div className="z-10 bg-green-400 rounded-lg w-80 shadow py-4 text-gray-900 overflow-y-auto h-96">
                <div className="px-4 py-2">
                  <div className="flex justify-between ">
                    <h1 className="text-2xl font-bold">การแจ้งเตือน</h1>
                    <a
                      href="#"
                      className="hover:bg-pink-500 hover:text-pink-500 inline-block px-2 py-1 rounded-xl text-lg  focus:bg-pink-500 focus:text-pink-500 "
                    >
                      <FontAwesomeIcon icon={faEllipsis} />
                    </a>
                  </div>
                  <div className="flex text-sm gap-x-3 py-2 px-2 ">
                    <span>
                      <a
                        href="#"
                        className={`hover:bg-pink-500 hover:text-pink-500 rounded-xl text-sm focus:bg-pink-500 focus:text-pink-500 ${
                          activeBell === 1 ? "bg-pink-500 text-pink-500" : ""
                        } px-2 py-1`}
                        onClick={() => setActiveBell(1)}
                      >
                        ทั้งหมด
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className={`hover:bg-pink-500 hover:text-pink-500 rounded-xl text-sm focus:bg-pink-500 focus:text-pink-500 ${
                          activeBell === 2 ? "bg-pink-500 text-pink-500" : ""
                        } px-2 py-1`}
                        onClick={() => setActiveBell(2)}
                      >
                        ยังไม่ได้อ่าน
                      </a>
                    </span>
                  </div>
                  <div className="px-2">
                    <a
                      href="#"
                      className={`hover:bg-pink-500 hover:text-pink-500 rounded-xl text-sm focus:bg-pink-500 focus:text-pink-500 ${
                        activeBell === 3 ? "bg-pink-500 text-pink-500" : ""
                      } px-2 py-1`}
                      onClick={() => setActiveBell(3)}
                    >
                      ลำดับความสำคัญ
                    </a>
                  </div>
                </div>
                <ul className="text-sm">
                  <li className="px-4 py-2">
                    <a
                      href="#"
                      className="flex items-center hover:bg-pink-500 px-2 py-1 rounded-xl "
                    >
                      <div>
                        {profileFriend ? (
                          <div
                            className="h-14 w-14 bg-pink-400 rounded-full flex items-end justify-end col-span-1 "
                            style={{
                              backgroundImage: `url(${profileFriend.avatar})`,
                              backgroundSize: "cover",
                            }}
                          >
                            <div className="h-7 w-7 bg-sky-500 rounded-full flex items-center justify-center text-white">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="px-3">
                        {profileFriend ? (
                          <p>
                            {profileFriend.first_name} {profileFriend.last_name}{" "}
                            ได้ส่งคำขอเป็นเพื่อนคุณ
                          </p>
                        ) : (
                          <></>
                        )}

                        <p className="text-xs">3 สัปดาห์ที่แล้ว</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className={`h-10 w-10 rounded-full flex items-end justify-end  cursor-pointer	 hover:bg-pink-500 ${
              dropDownProfile ? "bg-pink-500 text-pink-500" : "bg-pink-400 "
            }`}
            onClick={handleClickProfile}
            ref={dropDownToggleProfileRef}
          >
            {profile ? (
              <img
                src={profile.avatar}
                alt=""
                className="h-10 w-10 rounded-full absolute z-0"
              />
            ) : (
              <></>
            )}
            <FontAwesomeIcon icon={faCaretDown} className="z-10" />
          </div>
          {dropDownProfile && (
            <div className="absolute right-0 top-12" ref={dropDownProfileRef}>
              <div className="z-10 bg-green-400  rounded-lg w-80 shadow py-4">
                <div className="mx-4 text-gray-900 rounded-lg shadow-lg">
                  <a
                    href="#"
                    className="font-medium text-lg py-2 px-2 flex items-center hover:bg-pink-500"
                  >
                    {profile ? (
                      <>
                        <img
                          src={profile.avatar}
                          alt=""
                          className="w-9 h-9 rounded-full"
                        />
                        <span className="mx-2">
                          {profile.first_name} {profile.last_name}
                        </span>
                      </>
                    ) : (
                      <></>
                    )}
                  </a>
                  <hr className="absolute left-1/2 transform -translate-x-1/2 h-px w-11/12" />
                  <a
                    href="#"
                    className="truncate py-2 px-2 text-sm text-pink-500 hover:bg-pink-500 block"
                  >
                    ดูโปรไฟล์ทั้งหมด
                  </a>
                </div>
                <ul className="py-2 text-sm text-gray-900 ">
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 hover:bg-pink-500 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-pink-400 flex justify-center items-center">
                          <FontAwesomeIcon icon={faGear} className=" text-xl" />
                        </div>
                        <span className="px-3">
                          การตั้งค่าและความเป็นส่วนตัว
                        </span>
                      </div>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-xl"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 hover:bg-pink-500 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-pink-400 flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleQuestion}
                            className=" text-xl"
                          />
                        </div>
                        <span className="px-3">การช่วยเหลือและการสนับสนุน</span>
                      </div>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-xl"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 hover:bg-pink-500 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-pink-400 flex justify-center items-center">
                          <FontAwesomeIcon icon={faMoon} className=" text-xl" />
                        </div>
                        <span className="px-3">การแสดงผลและการเข้าถึง</span>
                      </div>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-xl"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 hover:bg-pink-500 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-pink-400 flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCommentDots}
                            className=" text-xl"
                          />
                        </div>
                        <span className="px-3">แสดงความคิดเห็น</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-4 py-2 hover:bg-pink-500 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-pink-400 flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className=" text-xl"
                          />
                        </div>
                        <span className="px-3">ออกจากระบบ</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
