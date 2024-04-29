import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const OurGallery = () => {
    return (
        <div>

            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide> <div >
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/1zvgHZV/craft7.jpg" />

                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div >
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/GxnDkt6/craft10.jpg" />

                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div >
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/QmN7q23/slide2.jpg" />

                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div >
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/5421qVV/craft8.jpg" />

                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div >
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/8xkXRYn/craft9.jpg" />

                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div >
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/tCRbsd3/craft2.jpg" />

                    </div>
                    </SwiperSlide>

                </Swiper>
            </>







        </div>
    );
};

export default OurGallery;