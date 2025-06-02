import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import Gambar1 from '../assets/login/Gambar1.jpg';
import Logo from '../assets/logo.svg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("adminEmail", email);

      alert("Login berhasil!");

      if (email === "admin@gmail.com") {
        navigate("/dashboard-admin");
      } else {
        navigate("/user/dashboard");
      }

    } catch (err) {
      alert("Login gagal: " + err.message);

      // Dummy login fallback
      if (email === "admin@gmail.com") {
        alert("Connecting (dummy)...");
        localStorage.setItem("token", "dummy-token");
        localStorage.setItem("role", "admin");
        localStorage.setItem("adminEmail", email);
        navigate("/dashboard-admin");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Bagian Kiri (Background) */}
      <div
        className="hidden md:flex md:flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${Gambar1})` }}
      />

      {/* Bagian Kanan (Form Login) */}
      <div className="flex flex-1 items-center justify-center bg-white overflow-y-auto">
        <div className="w-full max-w-md px-6 py-4 sm:px-8 sm:py-6 space-y-4">
          {/* Logo */}
          <img src={Logo} alt="SkyBook Logo" className="mx-auto w-40 h-40 mb-2" />

          <h1 className="text-2xl font-bold text-center text-blue-600">Login</h1>
          <p className="text-center text-gray-600">Welcome to SkyBook - Let's go in</p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm gap-2">
              <a href="#" className="text-blue-500 hover:underline">Forgot?</a>
              <span className="text-gray-700">
                Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
