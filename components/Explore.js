import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function Explore() {
  return (
    <>
        <div className=' lg:pt-28 relative overflow-hidden'>
                <div className=' lg:w-446 lg:h-1197 bg-blue  lg:mb-0 px-7 lg:px-0'>
                        <div className=" absolute top-0">
                        <Image src="/assets/ilogo_lighting.png" width={1855} height={1471} alt="plus"/>
                        </div>
                    <div className=' lg:pt-20 pt-10  pb-7 '>
                        <h4 className=' font-bold md:text-base text-xs text-t-black-2 md:mb-7 mb-3 lg:relative left-475'>EXPLORE</h4>
                        <div className=" max-w-1085 lg:absolute lg:left-279">
                            
                            <p className=' font-black md:text-9xl text-5xl text-white'>MY YELLOW SHOES</p>
                            <p className=" font-Zenith md:text-98 text-3xl text-blue rotate-15 lg:absolute lg:bottom-20 lg:left-475">on Twitter</p>
                            <button className=" font-bold md:text-base text-xs text-white md:py-5 py-3 md:px-12 px-6 bg-gradient-to-r from-blue to-purple rounded-full mb-5 lg:mb-0 lg:absolute lg:right-16 lg:bottom-7">
                            VIEW ALL
                        </button>
                        </div>
                    </div>


                        <Swiper 
                        slidesPerView={2} spaceBetween={30}
                        className="mySwiper  lg:top-80 lg:w-1334 lg:left-407 hidden lg:block" >
                            <SwiperSlide className=" ">
                                <div className="relative lg:h-538 lg:w-660">
                                    <div className=" bg-img1 bg-cover bg-no-repeat bg-center h-407 relative">
                                            <div className=" absolute top-10 right-10">
                                                <Image src="/assets/ico_twitter.svg" width={42} height={34} alt="plus"/>
                                            </div>
                                    </div>
                                    <p className="font-normal md:text-lg text-xs text-t-black-2 max-w-420 mt-12 ml-56 "><span className=" font-extrabold">Sneaker News:</span>  @SneakerNews <span className=" font-bold md:text-sm text-xs text-blue">13 hours ago</span>  yellow high del are dropping on May 4th <a href="#" className=" text-blue underline">https://snkrne.ws/2Hjg4u6</a></p>
                                </div>
    
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative lg:h-538 lg:w-660">
                                    <div className=" bg-img2 bg-cover bg-no-repeat bg-center h-407 relative">
                                            <div className=" absolute top-10 right-10">
                                                <Image src="/assets/ico_twitter.svg" width={42} height={34} alt="plus"/>
                                            </div>
                                    </div>
                                    <p className="font-normal md:text-lg text-xs text-t-black-2 max-w-420 mt-12 ml-56 "><span className=" font-extrabold">Sneaker News:</span>  @SneakerNews <span className=" font-bold md:text-sm text-xs text-blue">13 hours ago</span>  yellow high del are dropping on May 4th <a href="#" className=" text-blue underline">https://snkrne.ws/2Hjg4u6</a></p>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative lg:h-538 lg:w-660">
                                    <div className=" bg-img3 bg-cover bg-no-repeat bg-center h-407 relative">
                                            <div className=" absolute top-10 right-10">
                                                <Image src="/assets/ico_twitter.svg" width={42} height={34} alt="plus"/>
                                            </div>
                                    </div>
                                    <p className="font-normal md:text-lg text-xs text-t-black-2 max-w-420 mt-12 ml-56 "><span className=" font-extrabold">Sneaker News:</span>  @SneakerNews <span className=" font-bold md:text-sm text-xs text-blue">13 hours ago</span>  yellow high del are dropping on May 4th <a href="#" className=" text-blue underline">https://snkrne.ws/2Hjg4u6</a></p>
                                </div>
                                
                            </SwiperSlide>
                        </Swiper>

                </div>

                   
                        

                    
        </div>
    </>
  )
}

export default Explore