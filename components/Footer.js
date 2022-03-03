import Image from "next/image"

function Footer() {
  return (
    <>
        <div className=' lg:pr-72 relative lg:pb-24 overflow-hidden px-7 lg:px-0'>
            <div className=' bg-blue lg:pt-28  lg:pl-80 lg:pr-20 mt-7 lg:mt-0 px-7 lg:px-0 py-7 lg:py-0'>
                <div className=' md:mb-20 mb-10'>
                <p className=' font-bold md:text-base text-xs text-white md:mb-7 mb-3'>FIND US</p>
                    <div className=" lg:flex justify-between items-start">
                        <div className="relative mb-5 lg:mb-0">
                            <p className=' font-black md:text-4xl text-xl text-white  z-50 absolute top-4'>USA</p>
                            <div className=" md:mb-12 mb-6 relative lg:-left-7 -left-5">
                            <Image src="/assets/map_usa.png" width={140} height={78} alt="USA"/>
                            </div>
                            <p className=' font-extrabold md:text-base text-xs text-white'>Celeste Slater</p>
                            <p className=' max-w-239 font-normal md:text-base text-xs text-white'>606-3727 Ullamcorper. Street Roseville NH 11523 (786) 713-8616</p>
                        </div>
                        
                        <div className="relative mb-5 lg:mb-0">
                            <p className=' font-black md:text-4xl text-xl text-white  z-50 absolute top-4'>UK</p>
                            <div className=" md:mb-11 mb-6 relative lg:-left-7 -left-5">
                            <Image src="/assets/map_uk.png" width={46} height={82} alt="UK"/>
                            </div>
                            <p className=' font-extrabold md:text-base text-xs text-white'>Harriet J Henderson</p>
                            <p className=' max-w-239 font-normal md:text-base text-xs text-white'>112 Colorado Way RHYDCYMERAU SA19 4EW (079) 5203-5527</p>
                        </div>
                        
                        <div className="relative mb-5 lg:mb-0">
                            <p className=' font-black md:text-4xl text-xl text-white  z-50 absolute top-4'>AUSTRALIA</p>
                            <div className=" md:mb-8 mb-6 relative lg:-left-7 -left-5">
                            <Image src="/assets/map_aus.png" width={110} height={95} alt="AUSTRALIA"/>
                            </div>
                            <p className=' font-extrabold md:text-base text-xs text-white'>Victoria C Brennan</p>
                            <p className=' max-w-239 font-normal md:text-base text-xs text-white'>41 Creek Street HIGHLAND PLAINS 4401 (07) 4545-4212</p>
                        </div>
                        
                    </div>
                </div>
                <button className=" font-bold md:text-sm text-xs text-white md:py-5 py-3 md:px-12 px-6 bg-gradient-to-r from-yellow to-purple hover:from-purple hover:to-yellow transition duration-300 ease-in-out  rounded-full mb-12 md:mb-24 ">
                    GOOGLE MAP
                </button>
                    
                <div className="">
                    <div className=" lg:ml-44">
                            
                            <h3 className=" font-black md:text-5xl text-xl text-white md:mb-8 mb-4">WE ARE</h3>
                            <p className=" font-semibold md:text-lg text-xs text-white max-w-754 md:mb-10 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className=" lg:flex items-center lg:mb-48 mb-20">
                                <div className=" mr-7 mb-3 lg:mb-0">
                                    <Image src="/assets/ico_twitter-yellow.svg" width={24} height={20} alt="twitter"/>
                                </div>
                                <div className="mr-7 mb-3 lg:mb-0">
                                    <Image src="/assets/ico_facebook.svg" width={11} height={24} alt="AUSTRALIA"/>
                                </div>
                                <div className="mr-7 mb-3 lg:mb-0">
                                    <Image src="/assets/ico_instagram.svg" width={23} height={24} alt="AUSTRALIA"/>
                                </div>
                                <div className=" flex items-center">
                                    <p className="font-semibold text-white mr-2 ">-</p>
                                    <p className=" font-semibold md:text-base text-xs text-white">follow us</p>
                                </div>
                            </div>
                        </div>

                        <div className=" flex items-center lg:ml-80">
                        <div className=" mr-2">
                                <Image src="/assets/ilogo-yellow.svg" width={67} height={90} alt="logo"/>
                        </div>
                            <div>
                                <h3 className=" font-black md:text-42  text-xl text-yellow">LIGHTNING</h3>
                                <div className="lg:flex items-center">
                                    <p className=" font-semibold md:text-xl text-base text-yellow relative lg:-left-5 -left-2 lg:top-0 -top-2">FOOTWARE</p>
                                    <p className=" text-white font-normal text-xs">&copy; 2003-2019 Lightning Footware. Inc. All rights reserved</p>
                                </div>
                                
                            </div>
                        </div> 

                        <div className=" absolute lg:-bottom-498 lg:-left-56 hidden lg:block">
                                <Image src="/assets/img_sneakers_footer.png" width={1000} height={1100} alt="logo"/>
                        </div>

                        <p className=" hidden lg:block font-extrabold md:text-base text-white rotate-m90 absolute right-44 bottom-52">Crafted by EA93</p>
                </div>
                    

            </div>
        </div>
    </>
  )
}

export default Footer