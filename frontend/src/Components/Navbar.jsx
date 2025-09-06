import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar h-[10vh] shadow-lg shadow-black/7 p-3 max-w-screen fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md z-50 text-white space-x-4 flex-row gap-9 flex justify-center items-center">
      <div className="w-[30%]">
        <Link to="/Home" className="font-bold text-xl cursor-pointer">
        ration
       </Link>
      </div>
      <div className="w-[50%]">
      </div>
      <div className="w-[20%] flex gap-10">
        <Link to="/signup" className="h-9 border-1 w-20 bg-gradient-to-r from-[#2fff74] to-[#91ff00] rounded-sm flex items-center justify-center font-medium">sign-up</Link>
        <Link to="/login" className="h-9 border-1 w-20 bg-gradient-to-r from-[#2fff74] to-[#91ff00] rounded-sm flex items-center justify-center font-medium">log-in</Link>
      </div>
    </div>
  );
}
