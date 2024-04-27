import { useContext, useEffect, useState } from "react";
import { AUthContext } from "../../providers/AuthProvider";
import MyCraftCard from "./MyCraftCard";


const MyCraft = () => {
    const [myCrafts, setMyCrafts] = useState([]);

    const { user } = useContext(AUthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myCrafts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCrafts(data)
            })
    }, [user])

    return (
        <div>
            <h1>My Craft:{myCrafts.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    myCrafts.map(craft => <MyCraftCard
                        craft={craft}
                        key={craft._id}></MyCraftCard>)
                }
            </div>


        </div>
    );
};

export default MyCraft;