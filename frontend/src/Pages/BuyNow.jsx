import { useState } from "react";
import axios from "axios";
import NavMain from "../Components/NavMain";
import { useNavigate } from "react-router-dom";

export default function BuyNow(){
    const navigate = useNavigate();
    const item = localStorage.getItem("item");
    const price = localStorage.getItem("price");
    const unit = localStorage.getItem("unit");
    const email = localStorage.getItem("email");
    const mop = "cash on delivery";
    const [address,setAddress] = useState("");
    const [Fplace,setFplace] = useState("");
    const [phNum,setPhNum] = useState(0);

    const onSubmitBtn = async(e) => {
        e.preventDefault();
        try{
            const orderAPI = await axios.post("http://localhost:8080/buynow",{
                email,
                item,
                price,
                unit,
                address,
                Fplace,
                phNum,
                mop,
            });
            if(orderAPI.data.message === "order placed"){
                alert("Order is placed");
                localStorage.removeItem("item");
                localStorage.removeItem("price");
                localStorage.removeItem("unit");
                navigate("/ration");
            }else{
                alert("some error occured Tyr again");
            }
        }catch(err){
            console.error(err);
            alert("Fill Proper Details Please Try Again");
        }
    }
    return(
        <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-[#9DC183] to-[#8A9A5B]">
            <NavMain/>
            <div className="form bg-gradient-to-r from-green-100 to-green-200 h-[85%] flex flex-col items-center w-[75%] mt-15 rounded-lg p-10 fixed">
                <h1 className="font-bold text-5xl">Order Details</h1>
                <div className="mt-5 h-[30%] w-full flex justify-center items-center gap-20">
                    <input type="text" value={item} disabled className="inBuy" name="item"/>
                    <input type="number" value={price} disabled className="inBuy" name="price"/>
                    <input type="text" value={unit} disabled className="inBuy" name="unit"/>
                </div>
                <div className="mt-5 h-[33%] w-full flex justify-center items-center gap-30">
                    <textarea className="w-120 h-20 bg-white resize-none shadow-lg rounded p-3" rows={10} cols={30} name="address" id="" placeholder="Enter your home address..." onChange={(e) => setAddress(e.target.value)}></textarea>
                    <div className="flex flex-col gap-3">
                        <input type="text" className="inBuyAble" placeholder="famous place near you..." name="Fplace" onChange={(e) => setFplace(e.target.value)}/>
                        <input className="inBuyAble" type="number" placeholder="Phone Number" name="phNum" onChange={(e) =>setPhNum(e.target.value)}/>
                    </div>
                </div>
                <div className="mt-5 h-[30%] flex justify-center items-center gap-30 w-full">
                    <input type="text" value={mop} className="inBuy" name="mop" disabled/>
                </div>
                <div className="h-[7%] w-full flex justify-center items-center">
                    <button className="h-10 shadow-lg w-22 cursor-pointer text-white mt-5 font-semibold rounded-md bg-gradient-to-l from-yellow-400 to-orange-400" onClick={onSubmitBtn}>Buy</button>
                </div>
            </div>
        </div>
    );
}