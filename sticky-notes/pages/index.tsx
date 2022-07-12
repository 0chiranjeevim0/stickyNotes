import Head from 'next/head'
import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Contentrue from '../components/Contentrue';
import {auth} from '../firebase/firebase';
import {onAuthStateChanged,signOut} from 'firebase/auth';


const Home = () =>{
  //state to moniter userid
  const[authstate, setAuthstate] = useState('');

  onAuthStateChanged(auth,(user)=>{
    if(user){
      setAuthstate(user.uid);
    }else{
      setAuthstate(false);
    }
  })

  const signout = () =>{
    signOut(auth).then(()=>{
      setAuthstate(false);
    }).catch((err) =>{
      console.log(err);
    })
  }
  // signout();
  return(
    <div className="">
      <Head>
        <title>Stick Notes App | Notes Made Easy</title>
      </Head>
      {/* rendering navbar component passing auth state as a prop */}
      <Navbar authState={authstate} />

      {/* conditional rendering render component based on the login status */}
      {
        (authstate?<Contentrue />:<Content />)
      }
    </div>
  )
}

export default Home;