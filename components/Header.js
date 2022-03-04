import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";

function Header({onClick, active}) {

    const router = useRouter()
  return (
    <>
        <header className=" relative ">
            <div className=" bg-gradient-to-r from-blue to-purple flex justify-end  lg:hidden">
                <div className=" cursor-pointer py-4 mr-6 " onClick={onClick}>
                    <Image src="/assets/ico_menu.svg" width={40} height={32} alt="menu bar"/>
                 </div>
            </div>
            <div className=" lg:flex">
                <div className="grow">

                <div className=" ">
            <nav className={`${!active && 'hidden'}  relative top-0 w-full h-screen bg-blue z-50 `}>
                <ul className='flex flex-col py-10 text-center divide-y '>
                    <Link href='/'><a className={`${router.pathname == "/" ? " text-yellow" : "" } uppercase text-base text-white  font-Futura-Book py-3`}>HOME</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/about" ? " text-yellow" : "" } uppercase text-base text-white  font-Futura-Book py-3`}>ABOUT</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/shop" ? " text-yellow" : "" } uppercase text-base text-white  font-Futura-Book py-3`}>PRODUCTS</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/contact" ? " text-yellow" : "" } uppercase text-base text-white font-Futura-Book py-3`}>CONTACT</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/faq" ? " text-yellow" : "" } uppercase text-base text-white font-Futura-Book py-3`}>FAQ</a></Link>
                </ul>
              </nav>
            </div>
                
            <div className=" lg:flex grow overflow-hidden">

        
        
                <div className=" md:pl-24 md:pt-16 pt-10 md:px-0 px-7 lg:h-1168  md:pr-6 relative">
                   <div className=" flex items-center">
                       <div>
                            <Image src="/assets/ilogo_lighting.svg" width={61} height={86} alt="logo"/>
                       </div>
                       
                        <div>
                            <h3 className=" font-black md:text-40.3 text-xl text-blue">LIGHTNING</h3>
                            <p className=" font-semibold md:text-xl text-base text-blue relative -left-5">FOOTWARE</p>
                        </div>
                   </div> 
                   <div className=" absolute lg:-left-32 lg:top-20 top-16 -left-16 ">
                   <Image src="/assets/+.svg" width={804} height={804} alt="+"/>
                   </div>
                   <div className=" md:mt-64 mt-14 md:mb-10 mb-10">
                        <Image src="/assets/Pagination.svg" width={176} height={26} alt="pagination"/>
                    </div>
                   <div className="  relative">
                      <p className=" font-black text-blue md:text-90 text-3xl">LIGHTNING</p>
                      <p className=" font-light md:text-90 text-3xl text-white italic">LIGHT</p>
                      <p className=" font-black md:text-90 text-3xl text-white md:mb-10 mb-5">FOOTWARE</p>
                      <button className=" font-bold md:text-base text-xs text-white md:py-5 py-3 md:px-12 px-6 bg-gradient-to-r from-blue to-purple hover:from-purple hover:to-blue transition duration-300 ease-in-out rounded-full mb-9 lg:mb-0 flex">
                          <div className=" md:mr-10 mr-5"><Image src="/assets/arrow.svg" width={23} height={14} alt="arrow"/></div>
                           ORDER NOW
                        </button>
                   </div>
                   
                   <div className=" absolute  -right-7 bottom-9 hidden lg:block ">
                   <Image src="/assets/+.svg" width={247} height={243} alt="+"/>
                   </div>
                   <div className=" absolute  left-36 bottom-0 hidden lg:block">
                   <Image src="/assets/+.svg" width={111} height={111} alt="+"/>
                   </div>
                </div>
                
                <div className=" bg-blue md:h-1079  h-560 w-full md:px-0 px-7 flex-1 relative ">
                    <div className=" lg:flex  ">
                        <div className=" md:pl-10 md:pt-16 pt-10 relative grow">
                            <div className="md:mb-475 ">
                                <h4 className=" font-bold text-white md:text-base text-xs md:mb-14 mb-7">TOP STORE PRODUCTS</h4>
                                <h2 className=" font-Zenith text-white md:text-98 text-3xl  z-20 absolute ">for Ladies</h2>
                            </div>
                            
                            <div className="flex items-end relative lg:-left-36 md:pt-56 pt-64 -z-0">
                            <h1 className=" font-extrabold text-white md:text-300 text-9xl">02</h1>
                            <div className="flex items-end relative md:top-12 md:bottom-0 bottom-3">
                            <p className=" font-thin text-white md:text-6xl text-2xl">/</p>
                            <p className=" text-yellow md:text-3xl">05</p>
                            </div>
                            </div>
                            
                            <div className=" bg-yellow py-8 px-7 w-20  h-20 rounded-full flex items-center justify-center absolute md:right-16 right-8 lg:bottom-0 md:mt-10">
                            <div className=" ">
                                <Image src="/assets/arrow.svg" width={23} height={14} alt="arrow"/>
                            </div>
                                <p className=" font-bold text-xs text-white absolute -right-4 ">NEXT</p>
                            </div>
                            
                        </div>
                    </div>
                            <div className=" absolute lg:top-1 lg:left-16 top-16 z-0 lg:w-1077 lg:h-1267">
                                <Image src="/assets/img_sneakers_header.png" width={1077} height={1267} alt="sneakers"/>
                            </div>
                </div>


            </div>
            
            </div>
            
            
            <div className=" px-6 pt-14 bg-gradient-to-b md:h-1079 from-purple via-purple to-blue hidden lg:block text-center sticky ">
                            <div className=" mb-11 cursor-pointer" onClick={onClick}>
                            <Image src="/assets/ico_menu.svg" width={40} height={32} alt="menu bar"/>
                            </div>
                            <div className=" mb-759">
                            <Image src="/assets/cart.svg" width={28} height={30} alt="cart"/>
                            </div>
                            <div className=" mb-9">
                            <Image src="/assets/Shape.svg" width={10} height={20} alt="facebook"/>
                            </div>
                            <div className=" ">
                            <Image src="/assets/icon-04-512.svg" width={23} height={23} alt="instagram"/>
                            </div>
            </div>
           
            </div>
            
        </header>
    </>
  )
}

export default Header