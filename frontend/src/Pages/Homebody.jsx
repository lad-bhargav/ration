import { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function Homebody(){
    const [groceryData,setGroceryData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/ration")
        .then((res)=>res.json())
        .then((data)=>setGroceryData(data))
        .catch((err)=>console.log("error in fetching data : ",err));
    },[]);
    return(
        <div className="min-h-screen pt-20 max-w-screen bg-gradient-to-t from-[#5bffa0] to-[#2AF598] grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center p-6">
            {groceryData.map((item) => (
            <Card
                key={item._id}
                title={item.title}
                price={item.price}
                unit={item.unit}
                img={item.img}
                description={item.description}
            />
      ))}
        </div>
    );
}