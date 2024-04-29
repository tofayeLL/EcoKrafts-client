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


            <div className="space-y-3 lg:my-2">
                <h1 className="text-3xl font-bold animate__animated animate__backInLeft  animate__delay-0.5s">Featured Craft Collections</h1>
                <p className="lg:w-[54%]  animate__animated animate__backInRight animate__delay-0.5s ">Explore our curated craft collections, showcasing innovative designs crafted with eco-conscious materials, perfect for those seeking both style and sustainability</p>
            </div>







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