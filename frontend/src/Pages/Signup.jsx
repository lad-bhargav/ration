import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Signup(){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");

    const navigate = useNavigate();

    let onSubmitFcn = async() => {
        const SignupAPI = await axios.post("http://localhost:8080/signup",{
            "username" : username,
            "password" : password,
            "email" : email,
        });

        if(SignupAPI.data.message === "SignedUp"){
            navigate("/",{
                replace : true,
            })
        }else{
            alert("Sign-up failed");
        }
    }
    return(
        <div>
            <form action="" onSubmit={onSubmitFcn}>
                <input type="text" placeholder="enter a username" name="username"/>
                <input type="password" placeholder="enter a strong password" name="password" id="" />
                <input type="email" placeholder="enter your mail" name="email"/>
                <button>Sign-up</button>
            </form>
        </div>
    );
}