import { Link, useLoaderData } from "react-router-dom";


const AllCrafts = () => {

    const crafts = useLoaderData();





    return (
        <div className="">
            <h1>
                ALl Crafts: {crafts.length}
            </h1>





            <div className="overflow-x-auto bg-white border-[1px] border-[#e0e0e2] rounded-md">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-slate-200 text-lg font-semibold ">
                            <th>Craft Name</th>
                            <th>Price</th>
                            <th>Customization</th>
                            <th>Stock Status</th>
                            <th>Processing Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            crafts.map(craft =>
                                <tr key={craft._id} className="hover">
                                    <td>{craft.name}</td>
                                    <td>{craft.price}</td>
                                    <td>{craft.customization}</td>
                                    <td>{craft.stockStatus}</td>
                                    <td>{craft.processing}</td>
                                    <Link to={`/craft/${craft._id}`}><button><td className="text-violet-500 link font-semibold text-lg ">View Details</td></button></Link>
                                </tr>
                            )
                        }






                        {/* row 2 */}


                    </tbody>
                </table>
            </div>











        </div>
    );
};

export default AllCrafts;