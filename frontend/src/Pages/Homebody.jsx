import Card from "../Components/Card";

export default function Homebody(){
    return(
        <div className="min-h-screen pt-20 max-w-screen bg-gradient-to-t from-[#22E4AC] to-[#2AF598] grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center p-6">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}