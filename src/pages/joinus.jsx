import { useState } from 'react';
import { signupForJoinUs, checkDuplicateJoinUs } from '../Firebase';
import img7 from '../assets/Gemini_Generated_Image_ikv7c3ikv7c3ikv7-removebg-preview.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Joinus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    stack: '',
    gender: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, number, stack, gender } = formData;

    if (!name || !email || !number || !stack || !gender) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const isDuplicate = await checkDuplicateJoinUs(email, number);
      if (isDuplicate) {
        toast.error("You've already joined. Please don't submit again.");
        setLoading(false);
        return;
      }

      await signupForJoinUs(name, email, number, stack, gender);
      toast.success("Welcome to the community! Redirecting...");
      window.location.href = "https://chat.whatsapp.com/Lr5HyhTJi60EeqMgw5S2Mu";
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] grid grid-cols-1 md:grid-cols-2 place-items-center px-5 md:px-20 bg-[#ffffff] gap-10">
      <div className="w-full max-w-[400px]">
        <img src={img7} alt="Join Community" className="w-full h-auto" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[500px]">
        <h2 className="font-bold text-2xl">Join Our Community</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="h-[50px] px-4 rounded bg-gray-200 outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="h-[50px] px-4 rounded bg-gray-200 outline-none"
        />

        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="h-[50px] px-4 rounded bg-gray-200 outline-none"
        />

        <select
          name="stack"
          value={formData.stack}
          onChange={handleChange}
          required
          className="h-[50px] px-4 rounded bg-gray-200 outline-none"
        >
          <option value="">Select Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Product Designer">Product Designer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="FullStack">FullStack</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Web3">Web3</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Crypto / Forex">Crypto / Forex</option>
          <option value="QA Tester">QA Tester</option>
          <option value="Content Creation">Content Creation</option>
        </select>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="h-[50px] px-4 rounded bg-gray-200 outline-none"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className={`h-[50px] rounded border-2 border-[rgb(75,0,130)] font-semibold px-4 transition-all duration-200 ${
            loading
              ? 'bg-white text-[rgb(75,0,130)] cursor-not-allowed'
              : 'bg-white text-[rgb(75,0,130)] hover:bg-[rgb(75,0,130)] hover:text-white'
          }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Join Us'}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Joinus;
