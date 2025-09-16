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
        <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-[#9DC183] to-[#8A9A5B]">
            <NavMain/>
            <div className="bg-gradient-to-r from-green-100 to-green-200 shadow-lg h-[80vh] w-[60vw] p-3.5 rounded-2xl flex flex-col justify-center items-center mt-10">
                <div className="h-[60%] w-full flex justify-center items-center flex-col">
                    <div className="h-[100px] w-[100px] rounded-full overflow-hidden bg-amber-300"><img src={profile.profilepic} className="object-cover h-full w-full" alt="no pic"/></div>
                    <p className="font-bold mt-2">{profile.username}</p>
                    <p className="font-bold">{profile.email}</p>
                </div>
                <div className="h-[30%] w-full flex flex-col justify-items-start items-center">
                    <button className="h-10 w-22 cursor-pointer text-white mt-2 font-semibold rounded-md bg-gradient-to-l from-yellow-400 to-orange-400" onClick={editProfile}>Edit</button>
                    <button className="h-10 w-22 cursor-pointer mt-4 text-red-600 font-semibold rounded-md bg-gradient-to-r from-red-200 to-red-200" onClick={logOut}>Log-out</button>
                </div>
            </div>
        </div>
    );
}

export default Profile