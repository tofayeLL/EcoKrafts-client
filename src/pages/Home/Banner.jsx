// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='relative'>


            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper lg:h-[80vh] h-[60vh]  rounded-lg">

                {/* slide 1 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/bBwxMsW/slide5.jpg)] bg-center bg-cover'>

                </SwiperSlide>


                {/* slide 2 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/k6BgSnD/slide3.jpg)] bg-center bg-cover'>

                </SwiperSlide>


                {/* slide 3 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/Bj0Sc8y/slide8.jpg)] bg-center bg-cover'>

                </SwiperSlide>

                {/* slide 4 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/dJBn5my/slide4.jpg)] bg-center bg-cover' >

                </SwiperSlide>


                {/* slide 5 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/QnWdFK3/slide1.jpg)] bg-center bg-cover'>

                </SwiperSlide>



                {/* slide 6 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/wRwDs9W/slide6.jpg)] bg-center bg-cover'>

                </SwiperSlide>

                {/* slide 7 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/QmN7q23/slide2.jpg)] bg-center bg-cover'>

                </SwiperSlide>

                {/* slide 8 */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url(https://i.ibb.co/rbvM2KH/slide7.jpg)] bg-center bg-cover'>

                </SwiperSlide>



            </Swiper>


            <div className=' absolute flex flex-col justify-center items-center translate-y-[-60vh]  py-6 text-white z-10 w-full lg:px-10 px-3'>
                <div className='lg:space-y-6 md:space-y-3 space-y-2 text-center  '>
                    <h1 className='lg:text-5xl text-xl font-bold'>Eco-Friendly Creations at EcoCrafts</h1>
                    <p className='lg:w-[60%] md:w-[80%] w-full mx-auto lg:text-lg md:text-base text-sm opacity-90'>Explore EcoCrafts, where artistry meets sustainability in every handmade creation. From recycled materials to nature-inspired designs, each item tells a story of environmental stewardship. Join us in crafting a greener future, one eco-friendly masterpiece at a time.</p>
                    <button className='btn hover:text-violet-500 bg-violet-500  outline-none text-base font-semibold text-white'>Explore More</button>
                </div>

            </div>





        </div>
    );
};

export default Banner;