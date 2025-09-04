export default function Card(){
    return(
        <div className="card h-[57vh] w-[22vw] shadow-lg shadow-black/20 bg-white rounded-md p-5 m-3">
            <div className="image">
                <img src="abc.jpj" alt="err"/>
            </div>
            <h3 className="font-bold text-2xl">Title</h3>
            <p>Price</p>
            <button>Buy Now</button>
        </div>
    );
}