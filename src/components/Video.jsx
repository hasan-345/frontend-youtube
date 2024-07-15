import React, { useEffect, useState } from 'react'
import Container from "../components/Container"
import sample from "../assets/sample.png"
import { Link, useNavigate } from 'react-router-dom'
import service from '../API\'s data/allservices'
import { useSelector } from 'react-redux'
import AddVideoPlaylist from './AddVideoPlaylist'
const Video = ({_id,title,thumbnail,views,owner,duration,createdAt,removeVideo}) => {
 
  const statusCheckLoged = useSelector((state)=> state.status)
  const [profile,setProfile] = useState()
  const userData = useSelector((state)=> state.userData)
  useEffect(()=>{
   
    try {
      service.getUserById(owner).then((res)=>{
        if (res) {
          setProfile(res.data)
        }
      })
  } catch (error) {
    console.log("error while fetching avatar")
  }
   
  },[])

  const navigate = useNavigate();



  const [open,setOpen] = useState(false)
  function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    const units = [
        { name: 'year', seconds: 31536000 },
        { name: 'month', seconds: 2592000 },
        { name: 'week', seconds: 604800 },
        { name: 'day', seconds: 86400 },
        { name: 'hour', seconds: 3600 },
        { name: 'minute', seconds: 60 },
        { name: 'second', seconds: 1 }
    ];

    for (const unit of units) {
        const interval = Math.floor(diffInSeconds / unit.seconds);
        if (interval >= 1) {
            return `${interval} ${unit.name}${interval !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}


  function formatTime(seconds) {
    // Round seconds to the nearest integer
    const roundedSeconds = Math.round(seconds);
    
    // Calculate hours, minutes, and seconds
    const hrs = Math.floor(roundedSeconds / 3600);
    const mins = Math.floor((roundedSeconds % 3600) / 60);
    const secs = roundedSeconds % 60; 

    // Format hours, minutes, and seconds
    const formattedHours = hrs > 0 ? `${hrs}:` : '';
    const formattedMinutes = hrs > 0 ? (mins < 10 ? `0${mins}:` : `${mins}:`) : `${mins}:`;
    const formattedSeconds = secs < 10 ? `0${secs}` : `${secs}`;

    return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
}


  const toggleButton = ()=>{
   setShow((prev)=> !prev)
  }
  const [toggleShow,setShow] = useState(false)

 const [done,setDone] = useState()
  const removeVideoFromPlaylist = ()=>{
      try {
         service.removeVideoFromPlaylist(removeVideo.playlistId, removeVideo.videoId).then((res)=>{
          if (res) {
             console.log(res.data)
             setDone(true)
             navigate(`/profile/${owner}`)
          }
         })
      } catch (error) {
        
      }
  }

  return (
  
    <div className='w-[350px] m-3 flex flex-col text-black dark:text-white'>
   
  <Link to={`${statusCheckLoged? `/player/${_id}`:"/" }`} className={`${statusCheckLoged? "cursor-pointer": "cursor-not-allowed"}`}>  <div className='relative'>  <img src={thumbnail} alt="" className='rounded-xl h-[200px] w-full object-cover'  /> <p className='absolute bottom-2 right-2 bg-black text-sm text-white rounded-sm px-1'> {formatTime(duration)} </p> </div></Link>


   <div className='flex justify-between'>
     <div className='flex gap-2 pt-2'> <img src={ profile?.avatar} className='w-[40px] h-[40px] rounded-full object-cover' /> <div> <p> {title} </p> <p className='text-neutral-400 text-[15px]'> {profile?.fullName} </p> <div className='flex gap-2 flex-row'> <p className='text-neutral-400 text-[15px]'> {views?.length >= 1000 && views?.length < 1000000? `${ Math.round(Number(views?.length/1000))}k` : views?.length >= 1000000 && views?.length < 1000000000? `${Math.round(Number(views?.length/1000000))}M` : views?.length >= 1000000000? `${Math.round(Number(views?.length/1000000000))}B` : views?.length   } views</p> {removeVideo? null: <p className='text-neutral-400 text-[15px]'> {timeAgo(createdAt)} </p>}  </div> </div> </div>
     <div>

{owner == userData._id? ( 
  <>
  {removeVideo? (<>
  
    <div className='relative top-2'>
    <button id="dropdownMenuIconButton"  onClick={()=> setOpen((prev)=> !prev)} data-dropdown-toggle="dropdownDots" className={`${open? "bg-neutral-300": ""}  transition-all  p-2 rounded-full `} type="button">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
<path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>
</button>

        

<div id="dropdown" className={`z-20 absolute ${open? "max-h-[400px] opacity-100": "max-h-0 opacity-0"} right-7 top-8 transition-all opacity-0 max-h-0 overflow-hidden  bg-white divide-y border divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
   <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
     <li onClick={removeVideoFromPlaylist} className='cursor-pointer'>
       <p className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'> Remove video playlist</p>
     </li>
     <li>
       {/* <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> */}
     </li>
   </ul>
</div>
</div>

  
  </>): (<div className='relative top-2'>
    <button id="dropdownMenuIconButton"  onClick={()=> setOpen((prev)=> !prev)} data-dropdown-toggle="dropdownDots" className={`${open? "bg-neutral-300": ""}  transition-all  p-2 rounded-full `} type="button">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
<path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>
</button>

        

<div id="dropdown" className={`z-20 absolute ${open? "max-h-[400px] opacity-100": "max-h-0 opacity-0"} right-7 top-8 transition-all opacity-0 max-h-0 overflow-hidden  bg-white divide-y border divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
   <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
     <li onClick={toggleButton} className='cursor-pointer'>
       <p className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'> Add playlist</p>
     </li>
     <li>
       {/* <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> */}
     </li>
   </ul>
</div>
</div>)}
</>): null }

   


     </div>
     </div>
     <AddVideoPlaylist toggleShow={toggleShow} videoId={_id} changeShow={(show)=> setShow(show)} />
    </div>
  )
}

export default Video 

