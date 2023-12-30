// Contact.js
import React, { useState } from "react";
import { Footerbot } from "./Footerbot";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add your logic to send the form data to a server or API
  };

  return (
    <>
     <div className=" h-[80vh] flex items-center flex-col justify-center w-screen mx-auto">
      <h2 className="text-4xl font-semibold mb-4 text-center courgette">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-[30%]">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footerbot/>

    </>
   

  );
};

export default Contact;
