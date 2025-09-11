import { Link } from "react-router-dom";

export default function Card({id,title,price,unit,img,description}){
    return(
        <div className="card h-[57vh] w-[22vw] shadow-lg shadow-black/20 bg-white rounded-md p-4 m-3">
            <div className="bg-red-500 w-full h-45 rounded-lg overflow-hidden">
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
            <div className="h-20 flex justify-center items-center">
                <Link to=""></Link>
            </div>
        </div>
    );
} 