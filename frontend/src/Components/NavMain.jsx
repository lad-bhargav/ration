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
    <div className="navbar shadow-lg/5 bg-[#2b7541] max-w-screen h-[10vh] fixed top-0 left-0 w-full flex justify-between items-center px-6 text-white">
      <Link to="/ration" className="font-bold text-2xl cursor-pointer">
        ration
      </Link>

      <div className="flex-1 max-w-md px-4">
        <input
          type="text"
          placeholder="Search your ration here..."
          className="px-3 py-2 rounded-full text-white w-full border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div className="flex items-center gap-6">
        <ShoppingCartIcon className="cursor-pointer text-2xl" />
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-xl font-semibold">
        <pre className="flex">
          <h4 className="text-white">Hey,</h4>
          <Link to="/profile">{username}</Link>
        </pre>
        </h4>
      </div>
    </div>
  );
}
