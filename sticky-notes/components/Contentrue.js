import styles from '../styles/Contentrue.module.css';
import Note from './Note';

const Contentrue = () =>{
    return(
        <div className={styles.contentMainContainer}>
           <div class={styles.contentPostContainer}>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
           </div>
        </div>
    )
} 

export default Contentrue;