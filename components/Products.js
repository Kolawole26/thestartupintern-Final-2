import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation])

function Products() {

    
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    
      
  return (
    <>
        <div className=' lg:pt-28 lg:pb-24 lg:pl-36 py-10 px-7 lg:px-0 relative overflow-hidden'>
            <div className=' bg-blue lg:pl-36 lg:pt-36 px-7 pb-10 lg:pb-0 lg:h-1334 h-950 md:h-1500 relative'>
                <div>
                    <h6 className=' font-bold md:text-base text-xs text-white mb-3 pt-10 lg:pt-0'>OFFER</h6>
                    <h1 className=' font-black md:text-9xl text-5xl text-yellow-2'>HOT SHOE</h1>
                    <h3 className=' font-Zenith md:text-98 text-3xl text-white md:mb-20 mb-10'>for Ladies</h3>
                    <div className=' md:mb-8 mb-4 flex items-center'>
                        <div className=" md:mr-6 mr-3"><Image src="/assets/ico_arrow.svg" width={26} height={16} alt="arrow"/></div>
                        <h5 className=' font-extrabold md:text-3xl text-lg text-yellow-2'>WOMAN</h5>
                    </div>
                    <h5 className=' font-extrabold md:text-3xl text-lg text-white md:mb-8 mb-4 md:ml-12 ml-10'>MAN</h5>
                    <h5 className=' font-extrabold md:text-3xl text-lg text-white md:mb-8 mb-4 md:ml-12 ml-10'>KIDS</h5>
                </div>

                
                

                <div className=" absolute lg:top-72 lg:right-96 z-30 hidden lg:block">
                        <Image src="/assets/yellow-plus.svg" width={332} height={332} alt="plus"/>
                </div>
                <div className=" absolute lg:top-56 lg:right-0 -z-0">
                        <Image src="/assets/Clip.png" width={1166} height={893} alt="Clip"/>
                </div>
               
                
                        <div className="">
                                <div className=" lg:absolute lg:top-560 lg:right-44 z-50 relative top-16">
                                        <Image src="/assets/img_sneakers_mid.png" width={911} height={388} alt="sneaker"/>
                                </div>

                                    <div className=" lg:absolute max-w-660 lg:top-790 lg:right-80   z-40">
                                    <Swiper  
                                modules={[Navigation]} 
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                  }}
                                  onSwiper={(swiper) => {
                                    setTimeout(() => {
                                      swiper.params.navigation.prevEl = navigationPrevRef.current
                                      swiper.params.navigation.nextEl = navigationNextRef.current
                            
                                      
                                      swiper.navigation.destroy()
                                      swiper.navigation.init()
                                      swiper.navigation.update()
                                    })
                                  }}
                                className="mySwiper bg-yellow-2  lg:h-385   ">
                                    <SwiperSlide className="">
                                        <div className="lg:pt-14 lg:py-0 lg:px-0 py-7 px-4 lg:pl-8 lg:pr-16 flex">
                                            <p className=" font-black md:text-2xl text-base text-white md:mr-14 mr-7"><span className=" text-amber-500">1</span>/6</p>
                                            <div>
                                                <h3 className=" font-black md:text-4xl text-xl text-black md:mb-11 mb-5 ">Yellow Women's Olisa - Denim Canvas</h3>
                                                <p className=" font-normal md:text-base text-xs text-t-black-2 md:mb-10 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing sed 
                                                    do eiusmod tempor incididunt ut labore et dolore. magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                </p>
                                                <div className="md:flex items-center justify-between">
                                                <button className=" font-bold md:text-base text-xs text-white md:py-5 py-3 md:px-12 px-6 bg-gradient-to-r from-blue to-purple hover:from-purple hover:to-blue transition duration-300 ease-in-out rounded-full mb-5 lg:mb-0 flex">
                                                    QUICK LOOK
                                                </button>
                                                <p className=" font-black md:text-4xl text-xl text-white">$109.95</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                        
                                            
                                </Swiper>
                                        <div
                                            ref={navigationPrevRef}
                                            className="flex items-center absolute  lg:-right-66 lg:bottom-14  py-7 px-7  cursor-pointer bg-gradient-to-r from-blue to-purple hover:from-purple hover:to-blue transition duration-300 ease-in-out"
                                            >
                                            <div className=" ">
                                                <Image src="/assets/Shape-1.svg" width={11} height={16} alt="arrow-right"/>
                                            </div>
                                            </div>
                                        <div
                                            ref={navigationNextRef}
                                            className="flex items-center absolute lg:-right-66  lg:bottom-135 right-7 py-7 px-7  cursor-pointer bg-yellow"
                                            >
                                            <div className=" ">
                                                <Image src="/assets/Shape-2.svg" width={11} height={16} alt="arrow-left"/>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                



                <div className="hidden lg:block mt-32 ">
                        <Image src="/assets/black-plus.svg" width={110} height={110} alt="plus"/>
                    </div>
                
                <div className=" hidden lg:block mt-28 ml-3 ">
                        <Image src="/assets/yellow-plus.svg" width={70} height={70} alt="plus"/>
                    </div>
                <div className=" hidden lg:block mt-28 ml-3 absolute bottom-20 left-64 -z-0 ">
                        <Image src="/assets/white-plus.svg" width={254} height={254} alt="plus"/>
                    </div>
            </div>
            <p className="lg:block hidden stk lg:tracking-s-30  font-black text-190  text-transparent opacity-10 rotate-15 absolute top-80 left-0 ">PRODUCTS</p>
        </div>
    </>
  )
}

export default Products