import React, { useEffect, useState } from 'react'
import { RiMenuUnfold4Fill } from "react-icons/ri";
import Logo from "../assets/icon_logo.png"
import Input from '../../Input';
import { FiSearch } from "react-icons/fi";
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import service from '../API\'s data/allservices';
import { logout } from '../store/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const [width,setWidth] = useState(false)
    const [open,setOpen] = useState(false)
    const [inputValue, setinputValue] = useState()
    const state = useSelector((state)=> state.status);
    const userData = useSelector((state)=> state.userData);
    const [userOpen,setUserOpen] = useState(false);

    const dispatch = useDispatch()
    const handleTruth = ()=>{
      setWidth(false)
    }

  useEffect(()=>{
     window.addEventListener("resize",handleTruth)
  },[width])

  const handleSearch =()=>{
   if(inputValue){
      navigate(`searchVideos/${inputValue}`)
   } else{
      navigate("/")
   }
  }

  const logOut = async()=>{
      try {
        service.logout().then((res)=>{
          if (res) {
              navigate("/signup");
              dispatch(logout())
          }
        })
      } catch (error) {
        
      }
  }

  return (
    <>
    <div className='fixed top-0 z-10 w-full h-[70px] bg-white dark:bg-black '>
    <div className={` ${!width?"flex justify-between":""}  h-full   p-4 items-center gap-1`}>

    
       <div className={`flex gap-3 h-full items-center ${width?"hidden": ""}  `}> 
       <RiMenuUnfold4Fill className='text-2xl text-black dark:text-white' />
    <Link to="/">  <div className='flex gap-1 items-center selection:touch-none'>  <img src={Logo} alt="" className='h-[45px]' /> <h1 className='text-4xl font-semibold dark:text-white text-black'> Youtube</h1> </div></Link>
         </div>

       



       
       {state? (
         <div className={`flex items-center gap-4  ${width?"hidden": ""} `}>
         <div className='relative'>
 <button onClick={()=> {setOpen((prev)=> !prev); setUserOpen(false)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`${open? "bg-neutral-300": ""}  transition-all  p-2 rounded-full `} type="button"><BiSolidVideoPlus  className='text-3xl text-black dark:text-white' /> </button>
         

<div id="dropdown" className={`z-20 absolute ${open? "max-h-[400px] opacity-100": "max-h-0 opacity-0"} -right-7 top-16 transition-all opacity-0 max-h-0 overflow-hidden  bg-white divide-y border divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li onClick={()=> setOpen(false)}>
        <Link to="/create-tweet" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">create tweet</Link>
      </li>
      <li onClick={()=> setOpen(false)}>
      <Link to="/create-video" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">create video</Link>
      </li>
      <li onClick={()=> setOpen(false)}>
      <Link to="/create-playlist" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">create playlist</Link>
      </li>
      <li>
        {/* <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> */}
      </li>
    </ul>
</div>
</div>
       
      <div className='relative'>
      <button onClick={()=> {setUserOpen((prev)=> !prev); setOpen(false)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`${userOpen? "bg-neutral-300": ""}  transition-all  p-2 rounded-full `} type="button"> <FaUser className='text-2xl text-black dark:text-white' /></button>

      <div id="dropdown" className={`z-20 absolute ${userOpen? "max-h-[400px] opacity-100": "max-h-0 opacity-0"} -right-1 top-16 transition-all opacity-0 max-h-0 overflow-hidden  bg-white divide-y border divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li onClick={()=> setUserOpen(false)}>
        <Link to={`/profile/${userData._id}`} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Youtube Channel</Link>
      </li>
      <li onClick={()=> setUserOpen(false)} className='cursor-pointer'>
        <p onClick={logOut} className="selection:text-transparent block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</p>
      </li>
    </ul>
     </div>
     </div>
      
       </div>): (
         <div className={`flex items-center gap-4  ${width?"hidden": ""} `}>
         <Link to="/signup" className='text-white p-2 px-3 bg-black rounded-lg'  >SignUp</Link>
         </div>
       )

       }
       
       
     </div>
    </div>

    </>
  )
}

export default Navbar



 
