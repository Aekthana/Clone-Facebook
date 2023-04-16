import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDataProfile } from "../store/profileSlice";
import { setDataProfile } from "../store/profileSlice";

const Profile = () => {
  const { value } = useSelector((state) => state.profileStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProfile());
  }, [dispatch]);

  useEffect(() => {
    if (value) {
      const parsedData = JSON.parse(value);
      dispatch(setDataProfile(parsedData));
    }
  }, [value, dispatch]);

  return (
    <>
      <h1>{value && JSON.parse(value).first_name}</h1>
      <img src={value && JSON.parse(value).avatar} alt="" />
    </>
  );
};

export default Profile;
