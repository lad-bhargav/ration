import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let onSubmitFcn = async (e) => {
    e.preventDefault();

    try {
      const SignupAPI = await axios.post("http://localhost:8080/signup", {
        username,
        password,
        email,
      });

      if (SignupAPI.data.message === "SignedUp") {
        navigate("/login", { replace: true });
      } else {
        alert("Sign-up failed");
      }
    } catch (err) {
      console.error(err);
      alert("Fill Proper Details Please Try Again");
    }
  };

  return (
    <div className="h-screen w-screen flex bg-[#EEEEEE]">
      <div className="left h-screen w-[50%] bg-gradient-to-r from-[#F0E4D3] flex justify-center items-center">
            <p className="font-bold "><p className="text-7xl text-green-600">"ration"</p><p className="text-xl mt-1">Assessable Anytime, anywhere</p></p>
      </div>
      <div className="right h-screen w-[50%] flex justify-center items-center bg-gradient-to-l from-[#FAF7F3]">
        <form className="card bg-gradient-to-r shadow-lg from-blue-100 to-yellow-100 h-102 w-90 rounded-lg text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Sign-Up</h1>
        <input className="in mt-5"
          type="text"
          placeholder="enter a username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="in mt-5"
          type="password"
          placeholder="enter a strong password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="in mt-5"
          type="email"
          placeholder="enter your mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="mt-5 text-white h-10 w-30 rounded-md cursor-pointer font-medium bg-gradient-to-b from-[#FFE100] to-[#FFC900]" onClick={onSubmitFcn}>Sign-up</button>

        <div className="mt-5">
           <pre>already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-800 underline">login</Link></pre>
        </div>
      </form>
      </div>
    </div>
  );
}
