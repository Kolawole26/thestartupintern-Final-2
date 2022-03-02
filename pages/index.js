import Meta from "../components/Meta";
import Header from "../components/Header";
import About from "../components/About";
import Products from "../components/Products";
import Explore from "../components/Explore";
import Footer from "../components/Footer";


export default function Home({onClick, active}) {
  return (
    <>
      <Meta title='Home Page'/>
      <Header onClick={onClick} active={active}/>
      <About/>
      <Products/>
      <Explore/>
      <Footer/>
    </>
  )
}
