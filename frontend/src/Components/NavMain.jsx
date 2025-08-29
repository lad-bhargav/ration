import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState,useEffect } from "react";

export default function NavMain() {

    let [username,setUsername] = useState("");
    useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);
  return (
    <div className="navbar w-full h-[10vh] flex justify-between items-center px-6 bg-green-600 text-white">
      <Link to="/Home" className="font-bold text-xl cursor-pointer">
        ration
      </Link>

      <div className="flex-1 max-w-md px-4">
        <input
          type="text"
          placeholder="Search your ration here..."
          className="px-3 py-2 rounded-full text-white w-full border border-white/70 bg-transparent placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div className="flex items-center gap-6">
        <ShoppingCartIcon className="cursor-pointer text-2xl" />
        <h4 className="text-base">Welcome,{username}</h4>
      </div>
    </div>
  );
}
