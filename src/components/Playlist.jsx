import React, { useEffect, useState } from 'react'
import service from '../API\'s data/allservices'
import { Link } from 'react-router-dom'
const Playlist = ({userId}) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    useEffect(()=>{
        setLoading(false)
        setError(null)
          try {
                service.getUserPlaylist(userId).then((res)=>{
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


       if(data?.length == 0){
        return (
            <div className='flex items-center w-full my-10 justify-center'>
               <p className='text-2xl text-neutral-400'>Nothing!</p>
            </div>
        )
    }

  return (
    <div className='w-full flex flex-col'>

        {data && <div>
            
            {data.map((playlist)=>(
                <Link to={`/playlist/${playlist._id}`} key={playlist._id} >
                <div className='flex sm:flex-row  flex-col p-3 cursor-pointer gap-2 items-start'>
                    <img src={playlist.thumbnail} alt="" className='w-[350px] rounded-md object-cover' />
                    <div> <h2 className='font-semibold'>{playlist.name}</h2> <p>{playlist.description}</p> </div>
                </div>
                </Link>
            ))}
            </div>}

    </div>
  )
}

export default Playlist