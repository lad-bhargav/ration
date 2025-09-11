import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";
import NavMain from "../Components/NavMain";

    const Profile = () => {
        const navigate = useNavigate();
        const [profile,setProfile] = useState({});
        useEffect(()=>{
            getProfile();
        },[]);

        const getProfile = async() => {
            const Email = localStorage.getItem("email");
            if(!Email){
                navigate("/login");
            }

            const userProfile = await axios.post("http://localhost:8080/profile",{
                "email" : Email,
            });

            setProfile(userProfile.data.profile);
        }

        const editProfile = async() => {
            const Email = localStorage.getItem("email");
            navigate("/profile/edit");
        }

        const logOut = async() => {
            const Email = localStorage.removeItem("email");
            const username = localStorage.removeItem("username");
            navigate("/login");
        }

        return(
        <div className="h-screen w-screen bg-gradient-to-t from-[#5bffa0] to-[#2AF598]">
            <NavMain/>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div>
                    <p>{profile.username}</p>
                    <p>{profile.email}</p>
                    <img src={profile.profilepic} alt="no pic" />
                </div>
                <div>
                    <button className="btn-lg btn-md btn-sm sm:h-[35px] sm:w-[80px] sm:bg-amber-300" onClick={editProfile}>Edit</button><br /><br />
                    <button className="btn-lg btn-md btn-sm sm:h-[35px] sm:w-[80px] sm:bg-amber-300" onClick={logOut}>Log-out</button>
                </div>
            </div>
        </div>
    );
}

export default Profile