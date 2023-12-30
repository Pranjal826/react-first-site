import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createuser } from '../store/reducers/UserReducer'; 
import { toast } from 'react-toastify'; 
import { Footerbot } from './Footerbot';

const Register = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const SubmitHandler = (e) => {
      e.preventDefault();
  
      const { firstName, lastName, email, password } = formData;
  
      if (firstName.trim().length <= 4 || lastName.trim().length <= 4 || password.trim().length <= 4) {
        toast.error("Inputs must be at least 4 characters long");
        return;
      }
  
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.some((user) => user.email === email);
  
      if (userExists) {
        toast.error("User with this email already exists");
        return;
      }
  
      const user = { firstName, lastName, email, password };
      localStorage.setItem('users', JSON.stringify([...existingUsers, user]));
  
      dispatch(createuser(user));
  
      toast.success("User created successfully");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
  
      navigate('/login');
    };
  
  return (
    <>
      <div className="w-[100%] h-[80vh] bg-white rounded shadow-md flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={SubmitHandler}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
      <Footerbot />
    </>
  );
};

export default Register;
