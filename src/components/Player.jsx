import { useParams } from 'react-router-dom'
import service from '../API\'s data/allservices'
import React, { useEffect, useState } from 'react'
import ChannelDetById from './ChannelDetById'

const Player = () => {
 
 const [data, setData] = useState()
 const [loading, setLoading] = useState(false)
 const [error, setError] = useState()
 const [channels,setChannels] = useState();
 const [views,setViews] = useState(0)
 const {video_id} = useParams();

 useEffect(()=>{
  try {
    if (video_id) {
      service.getVideoById(video_id).then((res)=>{
        if (res) {
          setData(res.data);
          console.log(res.data)
        }
      })
    }

  } catch (error) {
    setError(error.message)
  } finally{
    setLoading(true)
  }   

 },[])


  useEffect(()=>{
    try {
      if (video_id) {
        service.addViewsOfVideo(video_id).then((res)=>{
          if (res) {
            console.log("addviews",res.data)
          }
        })
      }
  
    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(true)
    } 
  },[data])


  return (
<>
    {
      data && 
      <div className="">
          <div className="mt-[80px] p-4">
            <video className=" w-full h-full md:h-[90vh]" controls>
              <source src={data.videoFile} />
            </video>
          </div>

          <div className="p-4">
               <h2 className="text-4xl font-bold"> {data.title} </h2>  

               <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p></p>  
                        </div>
                    </div>
                    <ChannelDetById userId={data?.owner} />
                    {/* {views} */}
               </div>
          </div>  

      </div>  
    }   
  </>    
  )
}

export default Player