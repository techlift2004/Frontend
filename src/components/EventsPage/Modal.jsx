import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/tech lift copy 4 1.svg';

const Modal = ({ modall, setModall }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("All fields are required!");
      return;
    }

    toast.success("Details added successfully!");
    setTimeout(() => setModall(false), 2000);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      {modall && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center top-[4rem]">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={() => setModall(false)}
              aria-label="Close modal"
              className="absolute top-4 right-3 font-bold border-1 rounded p-1 px-2 border-[#4B0082] hover:bg-[#4B0082] hover:text-white"
            >
              Close
            </button>
            <form onSubmit={handleSubmit}>
              <img src={logo} alt='company-logo' className="w-28 mx-auto" />
              
              {["name", "email", "phone"].map((field, index) => (
                <div key={field} className="mb-4">
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                    autoFocus={index === 0}
                  />
                </div>
              ))}

              <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
