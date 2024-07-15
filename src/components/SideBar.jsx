import React from 'react'
import { FiHome } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
const SideBar = ({open}) => {
  return (
    <div className={`fixed z-10 top-[70px] pt-4 pl-4    flex flex-col h-full bg-white dark:bg-black dark:text-white transition-all w-[200px]  ${open?"w-[65px]":""} `}>
    <div className='py-4 flex items-center gap-3'><FiHome                 className='text-2xl'/>  <p className={`${open?"hidden":""}`}> Home</p></div>
    <div className='py-4 flex items-center gap-3'><SiYoutubeshorts        className='text-2xl' /> <p className={`${open?"hidden":""}`}> Shorts</p></div>
    <div className='py-4 flex items-center gap-3'><MdOutlineSubscriptions className='text-2xl' /> <p className={`${open?"hidden":""}`}> Subscription</p></div>
    <div className='py-4 flex items-center gap-3'><IoBookmarksOutline     className='text-2xl' /> <p className={`${open?"hidden":""}`}> You</p></div>
    </div>
  )
}

export default SideBar