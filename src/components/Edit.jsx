// components/EditProfile.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/reducers/UserReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.UserReducer.loggedInUser);
  const navigate = useNavigate();

  const [editedUser, setEditedUser] = useState({
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    email: loggedInUser.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateUser({ id: loggedInUser.id, ...editedUser }));
    toast.success('Profile updated successfully');
    navigate("/profile");
  };

  return (
    <div className="h-screen flex items-center justify-center py-6 sm:py-12">
      <div className="w-[50%] h-[50%] flex flex-col mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-4 text-center courgette">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={editedUser.firstName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={editedUser.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleUpdate}
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
