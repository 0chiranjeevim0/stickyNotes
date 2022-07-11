import React, {useState} from 'react';
import styles from '../styles/Content.module.css';
import {auth} from '../firebase/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Content = () =>{
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[error, setError] = useState(false);

    const Login = () =>{
        signInWithEmailAndPassword(auth,email,password).then((uid) =>{
        }).then(() =>{
            setEmail();
            setPassword();
            setError(false);
        }).catch((err)=>{
            if(err.message == 'Firebase: Error (auth/wrong-password).'){
                setError(true);
            }
        })
    }

    return(
        <div className={styles.contentMainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.subContainer}>
                    <forms>
                        <label className="text-gray-700 text-lg">
                            Email Address
                        </label>
                    <input onChange={(e) =>{setEmail(e.target.value)}} value={email} className="shadow mb-4 mt-4 appearance-none border rounded w-full py-2 px-3 text-black" type="text" placeholder='Enter Your Email Address' />
                    <label className="text-gray-700 text-lg">
                        Password
                        </label>
                    <input onChange={(e) =>{setPassword(e.target.value)}} value={password} className="shadow mb-4 mt-4 appearance-none border rounded w-full py-2 px-3 text-black" type="text" placeholder='Enter Your Password' />
                    {
                        (error?<p className="mb-2 text-red-600">Invalid Credentials</p>:console.log("no error"))
                    }
                    <button onClick={Login} className="buttonStyle text-white py-2 px-4 rounded">Login</button>
                    
                    </forms>
                </div>
            </div>
        </div>
    )
}

export default Content;