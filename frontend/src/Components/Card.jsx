export default function Card({title,price,unit,img}){
    return(
        <div className="card h-[57vh] w-[22vw] shadow-lg shadow-black/20 bg-white rounded-md p-5 m-3">
            <img src={img} alt={title} className="w-40 h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-3">{title}</h3>
            <div className="flex">
                <p className="text-gray-600">₹{price}</p> 
                <p className="text-gray-600">/{unit}</p>
            </div>
            <div className="h-20 flex justify-center items-center m-2">
                <button className="h-10 w-35  cursor-pointer rounded-md bg-amber-300">Buy Now</button>
            </div>
        </div>
    );
} 