import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    return(
        <div>
           {singleCard ? (
      <>
        <img src={singleCard.img} alt={singleCard.title} />
        <p>{singleCard.title}</p>
        <p>{singleCard.price}</p>
        <p>{singleCard.unit}</p>
        <p>{singleCard.description}</p>
      </>
    ) : (
      <p>Loading...</p>
    )}
        </div>
    );
}