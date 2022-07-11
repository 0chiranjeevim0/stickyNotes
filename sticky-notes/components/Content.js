import styles from '../styles/Content.module.css';
import React, {useState} from 'react';
const Content = () =>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

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
                    <button className="buttonStyle text-white py-2 px-4 rounded">Login</button>
                    </forms>
                </div>
            </div>
        </div>
    )
}

export default Content;