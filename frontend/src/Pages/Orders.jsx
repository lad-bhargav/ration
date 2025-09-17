import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OrderCard from "../Components/OrderCard";
import NavMain from "../Components/NavMain";

export default function Orders(){
    const {id} = useParams();
    const [details,setDetails] = useState([]);

    useEffect(()=>{
        getDetails();
    },[]);

    const getDetails = async() => {
        try{
            const email = localStorage.getItem("email");
            const card = await axios.get(`http://localhost:8080/orders/${email}`);
            console.log(card.data);
            setDetails(card.data);
        }catch(err){
            console.error("Error fetching card:", err);
        }
    }

    return(
        <div className="h-screen w-screen">
          <NavMain/>
            <div className="mt-15 h-full w-full bg-amber-400 fixed flex">
                {details.length > 0 ? (
                details.map((order) => (
                <div key={order._id}>
                <OrderCard
                  item={order.item}
                  price={order.price}
                  unit={order.unit}
                  mop={order.mop}
                  address = {order.address}
                />
            </div>
            ))
          ) : (
          <p className="text-4xl font-bold mt-5 ml-5">No orders found</p>
        )}
        </div>
        </div>
    );
}