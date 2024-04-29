import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    console.log(categories);

    return (
        <div>

            <div className="space-y-3 lg:my-2">
                <h1 className="text-4xl font-bold">Our Categories</h1>
                <p className="lg:w-[60%]">Discover our carefully curated categories, where eco-conscious crafting meets boundless imagination. Unleash your creativity sustainably with our diverse selection of handmade wonders</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 bg-violet-200 lg:p-6 p-4  rounded-lg shadow-xl">
                {
                    categories.map(category => <CategoriesCard
                        category={category}
                        key={category._id}>

                    </CategoriesCard>)
                }
            </div>



        </div>
    );
};

export default Categories;