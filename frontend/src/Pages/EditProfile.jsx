import { useEffect, useState } from "react";
import NavMain from "../Components/NavMain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfile(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [profilePic,setProfilePic] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        getProfile();
    },[]);

    const getProfile = async() => {
        const email = localStorage.getItem("email");
        const profile = await axios.post("http://localhost:8080/profile",{
            "email" : email,
        });

        setUsername(profile.data.profile.username);
        setPassword(profile.data.profile.password);
        setProfilePic(profile.data.profile.profilepic);
    }
    
    const upadteProfile = async() => {
        const email = localStorage.getItem("email");
        const newProfile = await axios.post("http://localhost:8080/profile/edit",{
            "email" : email,
            "username" : username,
            "password" : password,
            "profilepic" : profilePic,
        });
        if(newProfile.data.message == "profile update successfully"){
            navigate("/profile");
            localStorage.setItem("username",username);
        }else{
            alert("unable to update");
        }
    }

    return(
        <div className="h-screen w-screen bg-gradient-to-t from-[#9DC183] to-[#8A9A5B] flex flex-col justify-center items-center">
            <NavMain/>
            <div className="bg-gradient-to-r from-green-100 to-green-200 shadow-lg h-[70vh] mt-5 w-[60vw] p-3.5 rounded-2xl flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">Edit Profile</h1>
                <div className="mt-5">
                    <p className="text-sm font-semibold">username</p>
                    <input type="text" name="username" className="in" placeholder="username..." value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <p className="text-sm font-semibold">password</p>
                    <input type="password" className="in" name="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <p className="text-sm font-semibold">image</p>
                    <input type="text" name="image" className="in" placeholder="profile picture" value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/><br />
                </div>
                <button className="h-10 w-22 cursor-pointer text-white mt-5 font-semibold rounded-md bg-gradient-to-l from-yellow-400 to-orange-400" onClick={upadteProfile}>Edit</button>
            </div>
        </div>
    );
} 