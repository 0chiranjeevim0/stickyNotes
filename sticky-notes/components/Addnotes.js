import styles from '../styles/Addnotes.module.css';
import React,{useState} from 'react';
import {firestore} from '../firebase/firebase';
import {addDoc,collection} from 'firebase/firestore';


const Addtodo = (props) =>{
    const [authid, setAuthid] = useState();
    const [title, setTitle] = useState();
    const [caption, setCaption] = useState();
    const [datastat, setDatastat] = useState(false);
    const uid = props.uid;
    console.log(uid)
    const addNote = () =>{
        if(props.uid){
            addDoc(collection(firestore,uid),{
                title:title,
                caption:caption,
                priority:100,
            }).then(() =>{
                setTitle('')
                setCaption('');
                setDatastat(true)
            }).catch((err)=>{
                console.log(err)
            })
        }
        
    }

    return(
        <div className={styles.maincontainer}>
            <div className={styles.formcontainer}>
                <form>
                    <div className="mb-4">
                        <label className=" mt-10 block text-gray-700 text-sm font-bold mb-2" for="username">
                        Enter Title
                        </label>
                        <input onChange={(e) =>setTitle(e.target.value)} value={title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Title" />
                        <label className=" mt-10 block text-gray-700 text-sm font-bold mb-2" for="username">
                        Enter Caption
                        </label>
                        <input onChange={(e) => setCaption(e.target.value)} value={caption} id="caption" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Caption" />
                    </div>
                </form>
                <button  onClick={addNote} className="buttonStyle mt-5 text-white font-bold py-2 px-4 rounded">Add Note</button>
                <p className={(datastat?styles.gobackActive:styles.goback)}><a href="./">Note Added Successfully. Click Here To Go Back</a></p>
            </div>
        </div>
    )
}

export default Addtodo;