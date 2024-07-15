import React, { useEffect,useState } from 'react'
import service from '../API\'s data/allservices'
import { useParams } from 'react-router-dom'
import Container from './Container'
import Video from './Video'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SearchedVideos = () => {
    const {search} = useParams();
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState()
  const navigate = useNavigate();
 useEffect(()=>{
    setError("")
    setLoading(true)
    try {
        if(search){
            service.getPostsBySearch(search).then((res)=> {
                if(res) setData(res.videos)
            })
        }
    } catch (error) {
        setError(error.message)
    } finally{
        setLoading(false)
    }


 },[])

  return (
    <Container>
    <div className='flex-screen'>
       {data.map((item,i)=>(
        <div key={i} onClick={()=> {navigate(`/player/${item.video_id}`)}} >
        <Video {...item} />
        </div>
       ))}
    </div>
</Container>
  )
}

export default SearchedVideos