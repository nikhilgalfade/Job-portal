import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Clicked!");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", formData);
      console.log("Login success:", response.data);
      alert("Login Successful ✅");
      navigate("/dashboard"); // Only if you’ve set a dashboard route
    } catch (error) {
      console.error("Login failed", error);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don’t have an account? <span className="text-blue-600 hover:underline cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
