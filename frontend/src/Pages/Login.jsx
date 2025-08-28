import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    let onSubmitFcn = async (e) => {
        e.preventDefault();

        try {
            const LoginAPI = await axios.post("http://localhost:8080/login", {
                password,
                email,
            });

            if (LoginAPI.data.message === "login") {
                localStorage.setItem("email",email);
                navigate("/", { replace: true });
            } else {
                alert("Invalid email or password");
            }
    } catch (err) {
        console.error(err);
        alert("Fill Proper Details Please Try Again");
    }
  };
    return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#56ffa2]">
      <form className="card bg-gradient-to-r border-amber-50 border-1 from-[#328E6E] to-[#67AE6E] h-102 w-100 rounded-md text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-white">ration</h1>
        <input className="in"
          type="email"
          placeholder="enter your registered mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="in"
          type="password"
          placeholder="enter your password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="mt-5 text-white h-10 w-40 rounded-md cursor-pointer bg-green-400" onClick={onSubmitFcn}>Login</button>
      </form>
    </div>
    )
}