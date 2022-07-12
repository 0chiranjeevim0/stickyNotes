import styles from '../styles/Notes.module.css'

const Note = (props) =>{
    return(
        <div className=" mx-2  lg:ml-4 mt-5 mb-2 max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, e, exercitationem hilexercitationem hil exercitationem hil.exercitationem praesentium nihil.
                </p>
                <div className="">
                    <button className="buttonStyle text-white  py-2 px-4 rounded mt-2">Remove</button>
                    <button className="buttonStyle text-white  ml-2 py-2 px-4 rounded mt-2">Pin To SideBar</button>
                </div> 
            </div>
        </div>
    )
}

export default Note;