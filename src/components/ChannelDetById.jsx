import service from '../API\'s data/allservices'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ChannelDetById = ({userId}) => {

    const [channel, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()   
    const [subscribed,setSubscribed] = useState(false); 
    
    const userData = useSelector((state)=> state.userData)

    useEffect(()=>{
      try {
         service.getChannelDetail(userId).then((res)=>{
             if(res){
                setData(res.data)
                console.log("channel detail",res.data)
             }
         })
      } catch (error) {
         setError(error.message)
         console.log(error)
      } finally{
         setLoading(true)
      }
    },[subscribed])
        

const clickableSubscribed = async()=>{
   try {
      service.toggleSubscribed(channel?._id).then((res)=>{
          if(res){
            setSubscribed((prev)=> !prev)
             console.log(res)
          }
      })
   } catch (error) {
      setError(error.message)
      console.log(error)
   } finally{
      setLoading(true)
   }
}
      
const editVideo = async()=>{
   console.log("edit video")
}
   
          
  return (

   <div>
   {channel && <div className='flex items-center gap-11 my-5'>

      <div className='flex gap-3 items-center'>
     <Link to={`/profile/${userId}`}>  <img src={channel?.avatar} className='rounded-full h-[50px] w-[50px] object-cover' alt="" /></Link>
    <div>   <p className='font-bold text-xl'> {channel?.fullName} </p>
       <p> {channel?.subscribeCount} subscribers </p>
    </div>
    </div>
    {channel?._id === userData._id? ( <button className={`p-3 bg-black active:scale-[0.9] transition-all  text-white px-12 rounded-[30px]`} onClick={editVideo}> Edit </button>): (    <button className={`p-3 bg-black active:scale-[0.9] transition-all ${channel?.isSubscribed?"bg-neutral-500": "bg-black"} text-white px-5 rounded-[30px]`} onClick={clickableSubscribed}>  {channel?.isSubscribed? "Subscribed": "Subscribe"} </button>)}

      </div>}
  
   </div>
  )
}

export default ChannelDetById