import React, { useEffect,useState } from 'react'
import service from "../API's data/allservices"
import Video from './Video'
import Container from './Container'
import { useNavigate } from 'react-router-dom'
const Home = () => {

   const [data, setdata] = useState([])
   const [error, seterror] = useState()
   const [loading, setloading] = useState(true)
   const [avatar,setAvatar] = useState(null);
  const navigate = useNavigate();
   useEffect(()=>{
    setloading(true)
    seterror("")
    try {
      service.getAllpost().then((res)=> {
        if(res){
            setdata(res.data)
            setloading(false)
            console.log(res.data)
        }
    })
    } catch (error) {
      seterror(error.message)
    } finally{
      setloading(false)
    }
    
   },[])

  if(loading){
    return(
      <Container>
      <div className=''>Loading</div>
      </Container>
    )
  }

  return (
    <Container>
        <div className='flex flex-wrap gap-3'>
           {data.map((item,i)=>(
            <div key={i} className=''>
            <Video {...item}/>
            </div>
           ))}
        </div>
    </Container>
  )
}

export default Home