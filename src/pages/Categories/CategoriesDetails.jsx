import { useLoaderData } from "react-router-dom";


const CategoriesDetails = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return (
        <div>
            <h1>Category details</h1>
            
        </div>
    );
};

export default CategoriesDetails;