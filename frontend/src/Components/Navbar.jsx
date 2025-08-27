
export default function Navbar(){
    return(
        <div className="navbar h-[10vh] bg-gradient-to-r from-[#08CB00] to-[#538000] text-white flex-row gap-9 flex justify-center items-center">
            <a href="/" className="font-bold text-xl cursor-pointer">ration</a>
            <input type="text" placeholder="Search your ration here..."/>
            <a href="/signup">sign-up</a>
            <a href="/login">log-in</a>
        </div>
    );
}