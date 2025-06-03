import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import Gambar1 from "../assets/login/Gambar1.jpg";
import Logo from "../assets/logo.svg";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Mohon tunggu...",
        text: "Sedang memproses login",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      Swal.close(); // tutup loading

      if (!res.ok) throw new Error(data.message || "Login failed");

      const role = data.user.role;
      const name = data.user.name;
      const userId = data.user.id;

      localStorage.setItem("token", data.token);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", data.user.email);

      await Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang kembali.",
        icon: "success",
      });

      if (role === "admin") {
        navigate("/dashboard-admin");
      } else if (role === "user") {
        navigate("/homepage");
      } else {
        navigate("/dashboard-mitra");
      }
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: "Login Gagal",
        text: err.message || "Terjadi kesalahan saat login.",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  const handleGoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Kiri: Gambar */}
      <div
        className="hidden md:flex md:flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${Gambar1})` }}
      />

      {/* Kanan: Form Login */}
      <div className="flex flex-1 items-center justify-center bg-white overflow-y-auto">
        <div className="w-full max-w-md px-6 py-4 sm:px-8 sm:py-6 space-y-4">
          <img
            src={Logo}
            alt="SkyBook Logo"
            className="mx-auto w-40 h-40 mb-2"
          />
          <h1 className="text-2xl font-bold text-center text-blue-600">
            Login
          </h1>
          <p className="text-center text-gray-600">
            Welcome to SkyBook - Let's go in
          </p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
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
              <a href="#" className="text-blue-500 hover:underline">
                Forgot?
              </a>
              <span className="text-gray-700">
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={handleGoToSignUp}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
