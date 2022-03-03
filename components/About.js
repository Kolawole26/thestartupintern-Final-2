import Image from "next/image"

function About() {
  return (
    <>
        <div className="lg:relative lg:pb-28 pb-10 px-7 lg:px-0 overflow-hidden">
        <h1 className=" font-black text-blue lg:text-300p text-6xl absolute  -right-96 top-80 rotate-m90 hidden lg:block ">100%</h1>
            <div className=' lg:pt-14 pt-7 lg:flex '>
                <div className=' lg:w-560 lg:h-852 bg-blue mb-10 lg:mb-0 px-3 lg:px-0'>
                    <div className=' lg:pt-28 pt-14  pb-7 lg:relative lg:left-279'>
                        <h4 className=' font-bold md:text-base text-xs text-white md:mb-12 mb-6'>ABOUT</h4>
                        <div className=" flex ">
                            <div className=" relative top-6 md:mr-7 mr-4">
                                <Image src="/assets/plus.svg" width={24} height={24} alt="plus"/>
                            </div>
                            <div className=" flex-1">
                                <p className=' font-black md:text-6xl text-2xl text-purple '>LOREM IPSUM</p>
                                <p className=' font-black md:text-6xl text-2xl text-white '>
                                    DOLOR SIT AMET SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div className="grow bg-img_sneakers_overlay bg-cover bg-no-repeat bg-right">
                        <div className="  relative max-w-1085">
                        <div className=" absolute">
                        <Image src="/assets/ilogo_lighting.png" width={1085} height={861} alt="plus"/>
                        </div>
                                <div className="  lg:pt-48 lg:pl-80 lg:pr-44 relative right-0">
                                    <h4 className=" lg:max-w-398 font-semibold italic md:text-4xl text-lg text-t-black md:mb-10 mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    </h4>
                                    <p className=" lg:max-w-398 font-normal md:text-base text-xs text-t-black-2 md:mb-12 mb-6 ">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    </p>
                                    <button className=" font-bold md:text-base text-xs text-white md:py-5 py-3 md:px-16 px-6 bg-gradient-to-r from-blue to-purple rounded-full mb-5 lg:mb-0 flex md:mb-10">
                                        <div className=" md:mr-10 mr-5"><Image src="/assets/arrow.svg" width={23} height={14} alt="arrow"/></div>
                                        FIND OUT
                                    </button>
                                </div>
                                    
                              
                            </div>
                            
                    </div>
            </div>
            
            <p className=" font-bold md:text-base text-xs text-t-black-2 lg:mt-16 lg:ml-80">DUIS EGET DUI ULLAMCORPER, EUISMOD LIBERO ID, PLACERAT NISL.</p>
        </div>
    </>
  )
}

export default About