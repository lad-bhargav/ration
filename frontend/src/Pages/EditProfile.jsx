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
        }else{
            alert("unable to update");
        }
    }

    return(
        <div className="h-screen w-screen bg-gradient-to-t from-[#5bffa0] to-[#2AF598] flex flex-col justify-center items-center">
            <NavMain/>
            <div className="flex flex-col justify-center items-center">
                <h1>Edit Profile</h1>
                <input type="text" name="username" placeholder="username..." value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="text" name="image" placeholder="profile picture" value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/><br />
                <button className="btn-sm" onClick={upadteProfile}>Edit</button>
            </div>
        </div>
    );
} 