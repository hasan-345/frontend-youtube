import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../API\'s data/allservices';
import { useSelector } from 'react-redux';
import GetAllVideosUser from './GetAllVideosUser';
import TweetUser from './TweetUser';
import Playlist from './Playlist';

const Profile = () => {

  const {userId} = useParams();

  const userData = useSelector((state)=> state.userData) 
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const [currentContent,setCurrentContent] = useState("Videos")
   useEffect(()=>{
    setLoading(false)
       try {
             service.getChannelDetail(userId).then((res)=>{
              if (res) {
                  setData(res.data)
                  console.log(res.data)
              }
             })
       } catch (error) {
        setError(error)
        console.log(error)
       } finally{
        setLoading(true)
       }
   },[userId])

    
  

  return (
    <div className='mt-[80px] p-3 w-full'>
      { data &&
          <div className='w-full'>
                <div className='w-full'><img src={data.coverImage} alt="" className='sm:h-[300px] h-[200px] w-full object-cover rounded-2xl ' /></div>
                <div className='flex items-center gap-3 py-5'><img src={data.avatar} alt="" className='h-[150px] w-[150px] rounded-full object-cover' /> <div> <h2 className='text-3xl font-semibold py-1'> {data.fullName} </h2> <p>@{data.username} . {data.subscribeCount} subscriber | {data.subscribedToCount} subscribed </p> </div> </div>  
                
                <div className='my-4'>
                  <nav className='flex gap-5 items-end'>
                    <h2 className='font-semibold cursor-pointer' onClick={()=> setCurrentContent("Videos")}>Videos <div className={`line ${currentContent === "Videos"? "line2": ""}`}></div> </h2>
                    <h2 className='font-semibold cursor-pointer' onClick={()=> setCurrentContent("Tweets")}>Tweets <div className={`line ${currentContent === "Tweets"? "line2": ""}`}></div></h2>
                    <h2 className='font-semibold cursor-pointer' onClick={()=> setCurrentContent("Playlist")}>Playlist <div className={`line ${currentContent === "Playlist"? "line2": ""}`}></div></h2>
                  </nav>
                </div>
                  
                  <div className='mt-[40px] mb-[80px]'>
                  {  currentContent === "Videos"?  <GetAllVideosUser userId={userId} />: currentContent === "Tweets"? <TweetUser userId={userId} /> : currentContent === "Playlist"? <Playlist userId={userId} /> : null }  
                  </div>
                
        
          </div>     
      }   

       
        
    </div>
  )
}

export default Profile