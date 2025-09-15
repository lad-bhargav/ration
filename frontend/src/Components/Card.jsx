import { Link, useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export default function Card({id,title,price,unit,img,description}){
    const navigate = useNavigate();
    const visitCard = () => {
        navigate(`/${id}`);
    }
    return(
        <div className="card h-[57vh] w-[22vw] shadow-lg shadow-black/20 bg-white rounded-md p-4 m-3">
            <div className="top">
                <div className="bg-red-500 w-full h-45 cursor-pointer rounded-lg overflow-hidden" onClick={visitCard}>
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-lg font-semibold mt-3">{title}</h3>
            <div className="flex">
                <p className="text-gray-600">₹{price}</p> 
                <p className="text-gray-600">/{unit}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            </div>
            <div className="bottom h-15 w-full flex justify-center items-center">
                <Link to="/buynow">
                    <button className="bg-gradient-to-l text-white font-semibold text-lg from-yellow-400 to-orange-400 h-10 shadow-lg cursor-pointer rounded-lg w-65">Buy Now</button>
                </Link>
            </div>
        </div>
    );
} 