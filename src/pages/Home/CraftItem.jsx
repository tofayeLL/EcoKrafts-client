import { useEffect, useState } from "react";
import CraftItemCard from "../CraftItemCard/CraftItemCard";


const CraftItem = () => {

    const [crafts, setCrafts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/crafts')
            .then(res => res.json())
            .then(data => {
               
                setCrafts(data.slice(0, 6));
            })
    }, [])

    // console.log(crafts);


    return (
        <div>

        
        <h1>Craft Item: {crafts.length}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {
                crafts.map(craft => <CraftItemCard 
                    craft={craft}
                    key={craft._id}></CraftItemCard>)
            }
        </div>


        </div>
    );
};

export default CraftItem;