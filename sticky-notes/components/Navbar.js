import {MenuIcon} from '@heroicons/react/outline';
import styles from '../styles/Navbar.module.css';
import React,{useState} from 'react';


const Navbar = (props) =>{
    const[sidebar, setSidebar] = useState(false);
    const sidebarToggle = () =>{
        if(sidebar){
            setSidebar(false);
        }else{
            setSidebar(true);
        }
    }

    return(
       <div>
            <div className={styles.navbarMainContainer}>
                <div className={styles.NavbarLogoContainer}>
                    <h1 className={styles.logo}>StickyNotes</h1>
                </div>
                <div className={styles.logoContainer}>
                    
                    {
                        /* if props.authState is True then menu icon will be rendered */
                       (props.authState?<MenuIcon onClick={() =>{sidebarToggle()}} className='w-10 h-10 text-white cursor-pointer'/>:console.log("no user"))
                    }
                   
                </div>
            </div>
            <div className={(sidebar?styles.sidebarContainerActive:styles.sidebarContainer)}>
                <div className={styles.sidebarLogoContainer}>
                    <h1 className={styles.sidebarLogo}>StickyNotes</h1>
                </div>
            </div>
       </div>
    )
}


export default Navbar;