import {
  faEllipsis,
  faMagnifyingGlass,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aside = () => {
  return (
    <aside className="w-1/5 h-full fixed right-0  font-medium  text-base hover:overflow-y-scroll overflow-hidden bg-green-500">
      <div className="mt-5 ">
        <div>
          <p className="font-bold font-lg">ได้รับการสนับสนุน</p>
          <div className="p-1 flex flex-col gap-3">
            <a href="#" className="flex items-center mt-2 hover:bg-pink-500 p-1 rounded-lg">
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
            <a href="#" className="flex items-center mt-2 hover:bg-pink-500 p-1 rounded-lg">
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
              <div className="flex justify-end gap-1" style={{marginLeft:"4rem"}}>
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
              <li>
                <a href="" className="flex items-center gap-2 hover:bg-pink-500 p-1 rounded-lg">
                  <div className="rounded-full w-7 h-7 bg-pink-400 flex items-end justify-end">
                    <div className="rounded-full w-2 h-2 bg-green-600"></div>
                  </div>
                  <p>Elon Musk</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Aside;
