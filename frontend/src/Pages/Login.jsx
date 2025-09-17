import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
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
                localStorage.setItem("username",LoginAPI.data.username);
                localStorage.setItem("userId",LoginAPI.data.id);
                localStorage.setItem("logined","true");
                navigate("/ration", { replace: true });
            } else {
                alert("Invalid email or password");
            }
    } catch (err) {
        console.error(err);
        alert("Fill Proper Details Please Try Again");
    }
  };
    return (
    <div className="h-screen w-screen flex bg-[#EEEEEE]">
      <div className="left left h-screen w-[50%] bg-gradient-to-r from-[#F0E4D3] flex justify-center items-center">
        <p className="font-bold "><p className="text-7xl text-green-600">"ration"</p><p className="text-xl mt-1">Assessable Anytime, anywhere</p></p>
      </div>
      <div className="right right h-screen w-[50%] flex justify-center items-center bg-gradient-to-l from-[#FAF7F3]">
        <form className="card bg-gradient-to-r shadow-lg from-blue-100 to-yellow-100 h-102 w-90 rounded-lg text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Login</h1>
        <input className="in mt-5"
          type="email"
          placeholder="enter your registered mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="in mt-5"
          type="password"
          placeholder="enter your password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="mt-7 text-white h-10 w-30 rounded-md cursor-pointer font-medium bg-gradient-to-b from-[#FFE100] to-[#FFC900]" onClick={onSubmitFcn}>Login</button>
        <div className="mt-7">
           <pre>Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-800 underline">signup</Link></pre>
        </div>
      </form>
      </div>
    </div>
    )
}