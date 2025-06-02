import { useState } from "react";
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";
import "../app.css";
import Gambar1 from '../assets/Login/Gambar1.jpg';
import Logo from '../assets/logo.svg';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }), // hanya kirim name, email, password
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register failed");

      alert("Registrasi berhasil!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

    return (
        <div className="flex w-full h-screen">
            {/* Left Side - Image */}
            <div
                className="hidden md:flex md:flex-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${Gambar1})` }}>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center items-center bg-white p-8 md:w-1/2 w-full">
                <img src={Logo} alt="SkyBook Logo" className="w-35 h-35 mb-2" />
                <h1 className="text-2xl font-bold mb-2 text-blue-600">Sign Up</h1>
            <p className="mb-4 text-center">Welcome to SkyBook - Let’s create an account</p>

            {/* Login with Social */}
            <div className="flex space-x-4 mb-4">
          
            {/* Google */}
            <button className="flex items-center gap-2 bg-gray-200 px-4 py-1 rounded shadow hover:bg-gray-300">
                <FcGoogle className="text-xl" />
                <span>Log in with Google</span>
            </button>

            {/* Apple */}
            <button className="flex items-center gap-2 bg-gray-200 px-4 py-1 rounded shadow hover:bg-gray-300">
                <FaApple className="text-xl" />
                <span>Log in with Apple</span>
            </button>
        </div>

            {/* Form Fields */}
            <div className="w-full max-w-md">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    className="border p-2 rounded w-full mb-2"
                />
          
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    className="border p-2 rounded w-full mb-2"
                />
          
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                    type="password"
                    className="border p-2 rounded w-full mb-2"
                />
          
            <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2"/>
                    <span>I agree to the privacy & policy</span>
            </label>

            {/* Sign Up Button Centered */}
            <button className="bg-blue-500 text-white px-6 py-1 rounded hover:bg-blue-600 block mx-auto font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
