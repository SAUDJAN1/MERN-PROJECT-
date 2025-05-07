import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChangeEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const SubmitFormData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const res = await response.json();
      setError("");
      toast.success(res.msg, {
        theme: "dark", // or "light", "dark"
        autoClose:1000
      });
      navigate("/login");
    } else {
      const error = await response.json();
      setError(error.extraDetails);
      if (error.msg) {
        toast.warning(error.msg);
      } else {
        toast.error(error.extraDetails);
      }
    }
  };
  return (
    <>
      <div className="bg-amber-100 h-auto sm:w-full md:w-1/5 mx-auto my-10 rounded-3xl">
        <form
          action=""
          className="flex flex-col p-4 gap-12"
          autoComplete="off"
          onSubmit={SubmitFormData}
        >
          <input
            type="text"
            placeholder="enter your name"
            value={user.username}
            name="username"
            required
            onChange={handleChangeEvent}
            className="bg-red-300 text-2xl font-extralight italic rounded-xl indent-2 h-12"
          />

          <input
            type="email"
            placeholder="example@gmail.com"
            value={user.email}
            name="email"
            required
            onChange={handleChangeEvent}
            className="bg-red-300 text-2xl font-extralight italic rounded-xl indent-2 h-12"
          />

          <input
            type="password"
            placeholder="enter your password"
            value={user.password}
            name="password"
            required
            onChange={handleChangeEvent}
            className="bg-red-300 text-2xl font-extralight italic rounded-xl indent-2 h-12"
          />
          {error && <h1 className="text-red-400 text-sm">{error}</h1>}
          <input
            type="submit"
            value="Register"
            className="bg-green-300 rounded-2xl w-30 m-auto p-2 hover:duration-200 hover:bg-green-500 font-mono text-2xl"
          />
        </form>
      </div>
    </>
  );
};

export default Register;
