import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className="flex flex-row justify-center p-3 bg-green-950 text-white items-center gap-50 w-full h-60">
            <div className="left box ">
                <h3 className="text-xl">Contact us</h3>
                <div className='flex flex-row justify-center items-center h-[60%] w-full gap-5 m-3'>
                    <a href="https://www.linkedin.com/in/bhargav-lad/" target='_blank' className="text-blue-600"><LinkedInIcon fontSize='large'/><p>Linked-In</p></a><br />
                    <a href="https://x.com/bhargav_lad07" target='_blank' className="text-white"><XIcon fontSize='large'/><p>X</p></a><br />
                    <a href="https://github.com/lad-bhargav" target='_blank' className="text-gray-500"><GitHubIcon fontSize='large'/><p>GitHub</p></a><br />
                </div>
            </div>
            <div className="middle w-7xl h-full  text-center font-semibold">
                <h3 className='text-xl'>About us</h3>
                <div>
                    <p className='text-left text-sm font-normal m-4'>
                        We are dedicated to providing fresh groceries and daily essentials at affordable prices. Our mission is to make quality products accessible to everyone, ensuring convenience and savings for every household. From fruits and vegetables to grains and dairy, we bring you everything you need—straight to your home at low cost.
                    </p>
                </div>
            </div>
            <div className="right h-full w-3xl flex flex-col justify-center items-center">
                <Link to="/ration" className="font-bold text-xl cursor-pointer">
                    ration
               </Link>
                © {year} ration. All rights reserved
            </div>
        </div>
    );
}