import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    return(
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                        
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span><br></br>
                                <span> ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs"> {item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                                <button className="p-2 mx-12 rounded-lg bg-white my-[100] border-gray-100 shadow-lg">
                                    Add +
                                </button>
                            </div>
                            <img src={CDN_URL+item.card.info.imageId} className="w-36 h-auto p-4"></img>
                        </div>
                    </div>  
                ))
            }
        </div>
    )
}

export default ItemList;