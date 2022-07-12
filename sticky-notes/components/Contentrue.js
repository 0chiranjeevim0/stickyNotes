import React, {useEffect,useState} from 'react';
import styles from '../styles/Contentrue.module.css';
import Note from './Note';
import {firestore} from '../firebase/firebase';
import {collection, orderBy,query, onSnapshot} from 'firebase/firestore';

const Contentrue = (props) =>{
    const[notes, setNotes] = useState([]);

    useEffect(() =>{
    const q = query(collection(firestore,props.uid),orderBy("priority"));
       onSnapshot(q,(sanpshot) =>{
          sanpshot.docs.map((doc) =>{
            setNotes(sanpshot.docs.map((doc) => doc))
          })
       })
    },[])

    return(
        <div className={styles.contentMainContainer}>
           <div className={styles.contentPostContainer}>
                {
                    notes.map((note) =>(
                        <Note data={note.data()} id={note.id} uid={props.uid} length={notes.length} />
                    ))
                }
           </div>
        </div>
    )
} 

export default Contentrue;