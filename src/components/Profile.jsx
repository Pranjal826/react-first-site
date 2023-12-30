// components/Profile.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showuser, deleteuser } from "../store/reducers/UserReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Footerbot } from "./Footerbot";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.UserReducer.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      toast.error("Login to access profile");
      navigate("/login");
    } else {
      dispatch(showuser(loggedInUser.id));
    }
  }, [dispatch, loggedInUser]);

  const handleDelete = () => {
    if (loggedInUser) {
      dispatch(deleteuser(loggedInUser.id));
      toast.warn("Deleted successfully");
      navigate("/");
    }
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  return (
    <>
      <div className="h-[70vh] flex items-center justify-center py-6 sm:py-12 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
          <h2 className="text-4xl font-semibold mb-4 text-center text-indigo-600 playpen">
            Your Profile
          </h2>
          {loggedInUser && (
            <div>
              <p className="text-lg mb-2">
                <span className="font-semibold">Name:</span>{" "}
                {loggedInUser.firstName} {loggedInUser.lastName}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email:</span> {loggedInUser.email}
              </p>
              <div className="flex mt-6 space-x-4">
                <button
                  onClick={handleDelete}
                  className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Delete
                </button>
                <button
                  onClick={handleEdit}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footerbot />
    </>
  );
};

export default Profile;
