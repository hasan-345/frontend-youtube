import React, { useEffect,useState } from 'react'
import service from '../API\'s data/allservices'
import { useParams } from 'react-router-dom'
import Video from './Video';

const ShowPlaylist = () => {
 
    const {playlistId} = useParams();
   
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

  useEffect(()=>{
        try {
            service.getPlaylistById(playlistId).then((res)=>{
                if (res) {
                    setData(res.data)
                    console.log("playlist by Id",res.data)
                }
            })
        } catch (error) {
            
        }
  },[playlistId])

   const [videoIdPlayId,setVideoIdPlayId] = useState({playlistId: "",videoId: ""}); 

  const addVideo = (videoId)=>{
      setVideoIdPlayId({playlistId: data?._id, videoId: videoId})
  }

  return (
    <div>

        {data && <div className='mt-[80px] p-3'>
            <div className='border-b mb-6'>
                <div className='w-full'><img src={data[0].thumbnail} alt="" className='sm:h-[300px] h-[200px] w-full object-cover rounded-2xl ' /></div>
                <h2 className='text-3xl font-medium pt-5 pb-2 px-2'> {data[0].name} </h2>
                <p className='p-2'> {data[0].description} </p>
            </div>
                   
                {data[0].videos?.length === 0? ( <div className='flex items-center w-full my-10 justify-center'>
               <p className='text-2xl text-neutral-400'>Nothing!</p>
            </div>):(
                
                <div className='flex flex-wrap'>
                {data[0].videos.map((video)=> (
                  <div key={video._id}>
                    <Video {...video} removeVideo={{playlistId: data[0]._id, videoId: video._id}} />
                  </div>
                ))}   
          </div>

            )}



            </div>}
    </div>
  )
}

export default ShowPlaylist