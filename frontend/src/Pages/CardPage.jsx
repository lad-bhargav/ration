import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import NavMain from "../Components/NavMain"

export default function CardPage(){
    const navigate = useNavigate();
    const [singleCard,setSingleCard] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        getCard();
    },[]);

    const getCard = async() => {
        try{
            const card = await axios.get(`http://localhost:8080/${id}`);
            console.log(card.data);
            setSingleCard(card.data);
        }catch(err){
            console.error("Error fetching card:", err);
        }
    }

    const buyBtn = () => {
        localStorage.setItem("item",singleCard.title);
        localStorage.setItem("price",singleCard.price);
        localStorage.setItem("unit",singleCard.unit);
        navigate("/buynow");
    }
    return(
        <div className="h-screen w-screen mt-13 p-5 fixed bg-[#8A9A5B] flex">
            <NavMain/>
           {singleCard ? (
      <>
            <div className="card bg-white h-[90%] rounded-lg w-[50%] p-7">
                <div className="bg-red-500 w-[90%] h-[70%] shadow-lg/20 rounded-lg overflow-hidden">
                    <img src={singleCard.img} alt={singleCard.title} className="w-full h-full object-cover" />
                </div>
            <p className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mt-1 font-serif">{singleCard.title}</p>
            <p className="font-serif text-xl mt-2">{singleCard.maindescription}</p>
            </div>
        <div className="right h-screen w-[50%] flex flex-col justify-center items-center">
            <p>
                <p className="font-sans text-white font-semibold text-6xl">{singleCard.price}/{singleCard.unit}</p>
            </p> 
            <div className="bottom h-15 w-full flex justify-center mt-3 items-center">
                    <button onClick={buyBtn} className="bg-gradient-to-l text-white font-semibold text-lg from-yellow-400 to-orange-400 h-12 shadow-lg cursor-pointer rounded-lg w-65">Buy Now</button>
            </div>
        </div>
      </>
    ) : (
      <p>Loading...</p>
    )}
        </div>
    );
}