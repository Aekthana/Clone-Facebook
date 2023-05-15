import {
  faFlag,
  faGamepad,
  faHouse,
  faPaperclip,
  faShop,
  faTableCells,
  faTv,
  faTvAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../App";

const Navbar = () => {
  const { profile } = useContext(DataContext);

  return (
    <nav
      className="w-1/5 fixed left-0 font-medium hover:overflow-y-scroll overflow-hidden text-base bg-green-500"
      style={{ height: "92.5%" }}
    >
      <ul className="mt-4">
        <li>
          <ul className="flex flex-col gap-2">
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="mt-2 flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center text-pink-500 text-lg">
                    <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <p className="ps-1">หน้าหลัก</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center border-b border-pink-500 pb-1 ">
                <a
                  href="#"
                  className=" flex items-center hover:bg-pink-500 w-full rounded-lg mx-1"
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center ">
                    {profile ? (
                      <img
                        className="h-6 w-6 rounded-full flex justify-center items-center bg-pink-400 "
                        src={profile.avatar}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </div>
                  {profile ? (
                    <p className="ps-1">
                      {profile.first_name} {profile.last_name}
                    </p>
                  ) : (
                    <></>
                  )}
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-2 mt-1">
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center text-pink-500 text-lg">
                    <FontAwesomeIcon icon={faTvAlt} />
                  </div>
                  <p className="ps-1">Watch</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center text-pink-500 text-lg">
                    <FontAwesomeIcon icon={faFlag} />
                  </div>
                  <p className="ps-1">เพจ</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className=" flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center text-pink-500 text-lg">
                    <FontAwesomeIcon icon={faShop} />
                  </div>
                  <p className="ps-1">Marketplace</p>
                </a>
              </div>
            </li>

            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className=" flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center text-pink-500 text-lg">
                    <FontAwesomeIcon icon={faGamepad} />
                  </div>
                  <p className="ps-1">การเล่นเกม</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center border-b border-pink-500 pb-1 ">
                <a
                  href="#"
                  className=" flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center  bg-pink-400 text-lg text-pink-500">
                    <FontAwesomeIcon icon={faTableCells} />
                  </div>
                  <p className="ps-1">ดูทั้งหมด</p>
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-2 mt-1">
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center bg-pink-500"></div>
                  <p className="ps-1">กลุ่มนักเขียนโปรแกรม</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center bg-pink-500"></div>
                  <p className="ps-1">Job for Thai Programer</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center bg-pink-500"></div>
                  <p className="ps-1">ReactJS Developer Thailand</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center border-b border-pink-500 pb-1">
                <a
                  href="#"
                  className=" flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center  bg-pink-400 text-lg text-pink-500">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <p className="ps-1">ดูกลุ่มทั้งหมด</p>
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-2 mt-1">
            <li className="w-full ">
              <div className="flex items-center ">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1"
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center bg-pink-500"></div>
                  <p className="ps-1">Ager.io</p>
                </a>
              </div>
            </li>
            <li className="w-full ">
              <div className="flex items-center ">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center bg-pink-500"></div>
                  <p className="ps-1 ">Game of Thrones</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center bg-pink-500"></div>
                  <p className="ps-1">Royal Story</p>
                </a>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center border-b border-pink-500 pb-1">
                <a
                  href="#"
                  className=" flex items-center hover:bg-pink-500 w-full rounded-lg mx-1 "
                >
                  <div className="h-8  w-8 rounded-full flex justify-center items-center  bg-pink-400 text-lg text-pink-500">
                    <FontAwesomeIcon icon={faPaperclip} />
                  </div>
                  <p className="ps-1">ดูทางลัดทั้งหมด</p>
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
