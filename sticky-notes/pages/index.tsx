import Head from 'next/head'
import Navbar from '../components/Navbar';
import Content from '../components/Content';

const Home = () =>{
  return(
    <div className="">
      <Head>
        <title>Stick Notes App | Notes Made Easy</title>
      </Head>
      <Navbar data="hello" />
      <Content />
    </div>
  )
}

export default Home;