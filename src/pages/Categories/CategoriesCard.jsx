import React from 'react';

const CategoriesCard = ({ category }) => {
    const { photo, subCategory } =category;
    console.log(category);
    return (
        <div>


            {/* card 1 */}
            <div className="rounded-md shadow-sm bg-base-200 border-[1px] border-[#e0e0e2]">

                <div className="" >
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-4" >

                        <h2 className="lg:text-2xl md:text-lg text-lg font-semibold tracking-wide text-violet-800 ">{subCategory}</h2>
                        
                     

                    </div>

                </div>

            </div>




        </div>
    );
};

export default CategoriesCard;