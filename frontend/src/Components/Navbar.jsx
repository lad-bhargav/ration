import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Navbar() {
  return (
    <div className="navbar shadow-lg/5 bg-[#2b7541] max-w-screen h-[10vh] fixed top-0 left-0 w-full flex justify-between items-center px-6 text-white">
      <div className="w-[30%]">
        <Link to="/Home" className="font-bold text-3xl cursor-pointer">
        <ShoppingBagIcon className="text-green-500 mb-1" fontSize="20px"/>
        ration
       </Link>
      </div>
      <div className="w-[50%]">
      </div>
      <div className="w-[20%] flex gap-10">
        <Link to="/signup" className="h-9 w-20 bg-gradient-to-b from-[#FFE100] to-[#FFC900] rounded-sm flex items-center justify-center font-medium">sign-up</Link>
        <Link to="/login" className="h-9 w-20 bg-gradient-to-b from-[#FFE100] to-[#FFC900] rounded-sm flex items-center justify-center font-medium">log-in</Link>
      </div>
    </div>
  );
}
