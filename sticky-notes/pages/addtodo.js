import Addnotes from '../components/Addnotes';
import React, {useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase/firebase';

const addTodo = () =>{
    const [userid, setUserid] = useState();
    onAuthStateChanged(auth,(user) =>{
        if(user){
            setUserid(user.uid)
        }else{
            setUserid(false)
        }
    })
    return(
        <div>
            {
                (userid?<Addnotes uid={userid}/>:console.log("no user"))
            }
          
        </div>
    )
}

export default addTodo;