// components/Profile.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showuser, deleteuser } from "../store/reducers/UserReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.UserReducer.loggedInUser);
const navigate=useNavigate()
  useEffect(() => {
    if (!loggedInUser) {
      toast.error('Please Login Again...')
      navigate("/login");
    } else {
      dispatch(showuser(loggedInUser.id));
    }
  }, [dispatch, loggedInUser]);

  const handleDelete = () => {
    if (loggedInUser) {
      dispatch(deleteuser(loggedInUser.id));
      toast.warn('Deleted successfully')
      navigate('/')
    }
  };

  return (
    <div className="h-screen flex items-center justify-center py-6 sm:py-12">
      <div className="w-[50%] h-[50%] flex flex-col mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Profile Page</h2>
        {loggedInUser && (
          <div>
            <p className="text-lg mb-2">
              <span className="font-semibold">Name:</span>{" "}
              {loggedInUser.firstName} {loggedInUser.lastName}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {loggedInUser.email}
            </p>
            <button onClick={handleDelete} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
