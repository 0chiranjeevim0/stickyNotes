import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyCYRNbxQS4sQ5ji_55XSjPF0tJd0nMIcHU",
    authDomain: "sticky-notes-online-9cc21.firebaseapp.com",
    projectId: "sticky-notes-online-9cc21",
    storageBucket: "sticky-notes-online-9cc21.appspot.com",
    messagingSenderId: "998319562324",
    appId: "1:998319562324:web:4adc4b648f20558925d7c1",
    measurementId: "G-427M6XNYC9"
})

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export {auth,firestore}