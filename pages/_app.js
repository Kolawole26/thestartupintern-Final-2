import '../styles/globals.css';
import Layout from '../components/Layout';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
};
  return (
    <Layout>
      <div className=' bg-yellow'>
        <Component {...pageProps} onClick={onClick} active={active} />
      </div>
    </Layout>
  )
};

export default MyApp
