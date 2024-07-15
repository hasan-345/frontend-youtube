import React, { useState,useEffect } from 'react'
import service from '../API\'s data/allservices'
import Video from './Video'

const GetAllVideosUser = ({userId}) => {

    const [videos, setVideos] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(()=>{
        setLoading(false)
           try {
                 service.getAllVideosOfUser(userId).then((res)=>{
                  if (res) {
                    setVideos(res.data)
                      console.log(res.data)
                  }
                 })
           } catch (error) { 
            setError(error)
            console.log(error)
           } finally{
            setLoading(true)
           }
       },[])

       if(videos?.length == 0){
        return (
            <div className='flex items-center w-full my-6 justify-center'>
             <p className='text-2xl text-neutral-400'>Nothing!</p>
            </div>
        )
    }

  return (
    <div>
      {
        videos && 
        <div className='flex flex-wrap'>
              {videos?.map((video)=> (
                <div key={video._id}>
                  <Video {...video} />
                </div>
              ))}   
        </div>
      }

    </div>
  )
}

export default GetAllVideosUser