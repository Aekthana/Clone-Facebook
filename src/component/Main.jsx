import {
  faCamera,
  faEarth,
  faEllipsis,
  faFaceMeh,
  faFaceSmile,
  faGift,
  faImages,
  faMessage,
  faPager,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { DataContext } from "../App";

const Main = () => {
  const { profile, post } = useContext(DataContext);
  const [resultLike, setResultLike] = useState(0);
  const [like, setLike] = useState([]);


  const handleActiveLike = (id) => {
    const updateLikes = [...like]
    if(updateLikes[id]){
      updateLikes[id]= false;
    }else{
      updateLikes[id]= true;
    }
    setLike(updateLikes)
      setResultLike(1);
 
  };

  return (
    <main className="font-semibold " style={{ width: "30rem" }}>
      <div className="w-full p-3 my-7 bg-green-400 rounded-lg">
        <div className="flex items-center w-full  border-b border-pink-500 pb-3">
          <a href="#">
            {profile ? (
              <img
                src={profile.avatar}
                className="h-11 w-11 rounded-full bg-pink-500"
              ></img>
            ) : (
              <></>
            )}
          </a>
          <form action="#" className="w-full">
            <input
              type="text"
              className="h-10 rounded-full bg-pink-400 hover:bg-pink-500 px-3 mx-2 focus:outline-none"
              style={{ width: "98%" }}
              placeholder={
                profile ? `คุณคิดอะไรอยู่ ${profile.first_name}` : ""
              }
            />
          </form>
        </div>
        <div className="w-full pt-2 flex justify-center ">
          <a
            href="#"
            className="flex items-center w-2/4 justify-center hover:bg-green-500 p-2 rounded-lg"
          >
            <FontAwesomeIcon icon={faVideo} className="text-red-400 text-2xl" />
            <p className="px-2">วิดีโอถ่ายทอดสด</p>
          </a>
          <a
            href="#"
            className="flex items-center w-2/4 justify-center hover:bg-green-500 p-2 rounded-lg"
          >
            <FontAwesomeIcon
              icon={faImages}
              className="text-green-400 text-2xl"
            />
            <p className="px-2">รูปภาพวิดีโอ</p>
          </a>
        </div>
      </div>
      <ul>
        {post &&
          post.map((post, index) => (
            <li className="w-full p-3 my-7 bg-green-400 rounded-lg" key={post.id}>
              <div className="border-b border-pink-500 ">
                <div className="flex justify-between ">
                  <div className="flex items-center w-full  ">
                    <a href="#">
                      <img
                        src={profile ? profile.avatar : ""}
                        className="h-11 w-11 rounded-full bg-pink-500"
                      ></img>
                    </a>
                    <div className="px-3">
                      <p>
                        {profile
                          ? `${profile.first_name} ${profile.last_name}`
                          : ""}
                      </p>
                      <p className="text-xs">
                        1 นาที - <FontAwesomeIcon icon={faEarth} />
                      </p>
                    </div>
                  </div>
                  <a href="">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </a>
                </div>
                <p className="text-2xl px-1 py-2">{post.title}</p>
                {like[index] && (
                  <div className="flex gap-1 pl-2 items-center">
                    <div className="h-5 w-5 bg-rose-500 rounded-full flex justify-center items-center text-white text-xs">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <p className="text-pink-500">{resultLike}</p>
                  </div>
                )}
              </div>
              <div className="w-full cursor-pointer  flex justify-center border-b border-pink-500 gap-1">
                <div
                  className={`flex items-center w-2/4 justify-center hover:bg-green-500   rounded-lg my-1 py-1 ${
                    like[index] ? "bg-green-500" : ""
                  }`}
                  onClick={()=>{handleActiveLike(index)}}
                >
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className={`text-xl ${
                      like[index] ? "text-pink-500" : "text-gray-500"
                    }`}
                  />
                  <p
                    className={`px-2 ${
                      like[index] ? "text-pink-500" : "text-gray-500"
                    }`}
                  >
                    ถูกใจ
                  </p>
                </div>
                <label
                  htmlFor="comment"
                  href="#"
                  className="flex items-center w-2/4 justify-center hover:bg-green-500  rounded-lg my-1 py-1 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-gray-500 text-xl"
                  />
                  <p className="px-2 text-gray-500">แสดงความคิดเห็น</p>
                </label>
              </div>
              <div className="mt-2">
                <div className="flex justify-between ">
                  <div className="flex items-center w-full  ">
                    <a href="#">
                      {profile ? (
                        <img
                          src={profile.avatar}
                          className="h-8 w-8 rounded-full bg-pink-500"
                        ></img>
                      ) : (
                        <></>
                      )}
                    </a>
                    <div className="px-1 w-full ">
                      <form action="#" className="relative ">
                        <input
                          id="comment"
                          className="bg-pink-400 py-1 px-2 w-full rounded-full focus:outline-none"
                          type="text"
                          placeholder="แสดงความคิดเห็น..."
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex  text-gray-500 ">
                          <a
                            href=""
                            className="h-7 w-7 rounded-full  flex items-center justify-center hover:bg-pink-500"
                          >
                            <FontAwesomeIcon icon={faFaceMeh} />
                          </a>
                          <a
                            href=""
                            className="h-7 w-7 rounded-full  flex items-center justify-center hover:bg-pink-500"
                          >
                            <FontAwesomeIcon icon={faFaceSmile} />
                          </a>
                          <a
                            href=""
                            className="h-7 w-7 rounded-full  flex items-center justify-center hover:bg-pink-500"
                          >
                            <FontAwesomeIcon icon={faCamera} />
                          </a>
                          <a
                            href=""
                            className="h-7 w-7 rounded-full  flex items-center justify-center hover:bg-pink-500"
                          >
                            <FontAwesomeIcon icon={faGift} />
                          </a>
                          <a
                            href=""
                            className="h-7 w-7 rounded-full  flex items-center justify-center hover:bg-pink-500"
                          >
                            <FontAwesomeIcon icon={faPager} />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};
export default Main;
