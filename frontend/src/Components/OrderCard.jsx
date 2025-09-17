export default function OrderCard({item,price,unit,mop,address}){
    return(
            <div className="card h-[40vh] w-[22vw] shadow-lg shadow-black/20 bg-white rounded-md p-4 m-3">
                
            <h3 className="text-lg font-bold mt-3">{item}</h3>
            <div className="flex">
                <p className="text-gray-600">₹{price}</p> 
                <p className="text-gray-600">/{unit}</p>
            </div>
            <p>-----------------------------------------</p>
            <div className="h-[50%] w-full">
                <div className="h-[50%] w-full">
                    <p className="font-bold text-sm">Delivered at</p>
                    <p className="text-xl">{address}</p>
                </div>
                <p>-----------------------------------------</p>
                <div className="h-[50%] w-full">
                    <p className="font-bold text-sm">Mode of payment</p>
                    <p className="text-xl">{mop}</p>
                </div>
            </div>
        </div>
    );
}