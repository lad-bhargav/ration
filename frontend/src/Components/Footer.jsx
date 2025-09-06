import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return(
        <div className="flex flex-row justify-center p-3 bg-green-950 text-white items-center gap-50 w-full h-60">
            <div className="left box">
                <h3 className="text-xl">contact us</h3>
                <div className='flex flex-row justify-center items-center h-[60%] w-full gap-5'>
                    <a href="https://www.linkedin.com/in/bhargav-lad/" className="text-blue-600"><LinkedInIcon fontSize='large'/></a><br />
                    <a href="https://x.com/bhargav_lad07" className="text-black"><XIcon fontSize='large'/></a><br />
                    <a href="https://github.com/lad-bhargav" className="text-blue-950"><GitHubIcon fontSize='large'/></a><br />
                </div>
            </div>
            <div className="middle box bg-amber-900">
                <h3>about us</h3>
            </div>
            <div className="right box bg-blue-800">
                copyright
            </div>
        </div>
    );
}