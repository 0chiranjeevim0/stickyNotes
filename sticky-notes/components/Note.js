import styles from '../styles/Notes.module.css'
import {doc ,setDoc,collection,deleteDoc} from 'firebase/firestore';
import {firestore} from '../firebase/firebase';
import { BookmarkIcon } from '@heroicons/react/solid';
const Note = (props) =>{

    const changePriority = () =>{
        let docId = props.id;
        let docRef = doc(firestore,props.uid,props.id)
        let data = {
            title:props.data.title,
            caption:props.data.caption,
            priority:0
        }
        setDoc(docRef,data,{merge:true});
    }
    const deleteNote = () =>{
        let docRef = doc(firestore,props.uid,props.id)
        deleteDoc(docRef);
    }
    const resetPriority = () =>{
        let docId = props.id;
        let docRef = doc(firestore,props.uid,props.id)
        let data = {
            title:props.data.title,
            caption:props.data.caption,
            priority:props.length,
        }
        setDoc(docRef,data,{merge:true});
    }
    return(
        <div className=" mx-2 lg:ml-4 mt-5 mb-2 max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.data.title}</div>
                {
                    (props.data.priority == 0?
                        <BookmarkIcon className="w-6 h-6"/>
                        :
                        <BookmarkIcon className="hidden"/>
                    )
                }
                
                <p className="text-gray-700 text-base">{props.data.caption}</p>
                
                <div className="mb-4">
                    <button onClick={deleteNote} className="buttonStyle text-white  py-2 px-4 rounded mt-2">Remove</button>
                    
                        {
                            (props.data.priority!=0?
                                <button onClick={changePriority} className="buttonStyle text-white  ml-2 py-2 px-4 rounded mt-2">Add To Important</button>:
                                <button onClick={resetPriority} className="buttonStyle text-white  ml-2 py-2 px-4 rounded mt-2">Remove From Important</button>
                                
                            )
                        }
                </div> 
            </div>
        </div>
    )
}

export default Note;