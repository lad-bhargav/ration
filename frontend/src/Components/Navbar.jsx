import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar h-[10vh] bg-gradient-to-r from-[#08CB00] to-[#538000] text-white flex-row gap-9 flex justify-center items-center">
      <Link to="/" className="font-bold text-xl cursor-pointer">
        ration
      </Link>
      <input
        type="text"
        placeholder="Search your ration here..."
        className="px-2 py-1 rounded-lg text-white w-sm border-1"
      />
      <Link to="/signup">sign-up</Link>
      <Link to="/login">log-in</Link>
    </div>
  );
}
