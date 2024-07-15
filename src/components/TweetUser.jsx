import React, { useEffect, useState } from 'react'
import service from '../API\'s data/allservices'
import { Link } from 'react-router-dom'
const TweetUser = ({userId}) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [profile,setProfile] = useState();
   useEffect(()=>{
    setLoading(false)
    setError(null)
      try {
            service.getTweetsUser(userId).then((res)=>{
                if (res) {
                    console.log("tweets",res.data)
                    setData(res.data)
                }
            })
      } catch (error) {
        setError(error)
        console.log(error);
      }finally{
        setLoading(true)
      }
   },[userId])

   useEffect(()=>{
    setLoading(false)
    setError(null)
      try {
            service.getChannelDetail(userId).then((res)=>{
                if (res) {
                    console.log("tweets",res.data)
                    setProfile(res.data)
                }
            })
      } catch (error) {
        setError(error)
        console.log(error);
      }finally{
        setLoading(true)
      }
   },[data])

if(data?.length == 0){
    return (
        <div className='flex items-center w-full my-6 justify-center'>
         <p className='text-2xl text-neutral-400'>Nothing!</p>
        </div>
    )
}


  return (
    <div className='w-full flex flex-col py-3'>
        {data && profile  && 
        <div className='flex gap-2'>
              <img src={profile.avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
             
             <div>
              <p className='font-semibold'>{profile.fullName}</p>
              <p className='text-neutral-700'>@{profile.username}</p>
               <p className='text-black py-2'>{data[0].allTweet.content}</p></div>        
        </div>}
    </div>
  )
}

export default TweetUser