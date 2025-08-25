import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "candidate",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", formData);
      alert(response.data);
      if (response.data === "Registered successfully!") {
        navigate("/signin");
      }
    } catch (error) {
      alert("Registration failed ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Create Your Account 📝</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="text-sm">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-white/10 text-white border border-white/30 rounded-md"
            >
              <option value="candidate">Candidate</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-white">
          Already have an account?{" "}
          <span
            className="text-blue-200 hover:underline cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
