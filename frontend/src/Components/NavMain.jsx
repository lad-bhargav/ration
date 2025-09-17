import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState,useEffect } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function NavMain() {
    const navigate = useNavigate();
    let [username,setUsername] = useState("");
    useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const myOrders = () => {
      navigate(`/orders`);
  }

  return (
    <div className="navbar shadow-lg/5 bg-[#2b7541] max-w-screen h-[10vh] fixed top-0 left-0 w-full flex justify-between items-center px-6 text-white">
      <Link to="/ration" className="font-bold text-3xl cursor-pointer">
      <ShoppingBagIcon className="text-green-500 mb-1" fontSize="20px"/>
        ration
      </Link>

      <div className="flex items-center gap-6">
        <h4 className="text-transparent flex gap-7 bg-clip-text bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-xl font-semibold">
        <p onClick={myOrders} className="cursor-pointer">My Orders</p>
        <pre className="flex">
          <h4 className="text-white">Hey,</h4>
          <Link to="/profile">{username}</Link>
        </pre>
        </h4>
      </div>
    </div>
  );
}
