import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import service from './API\'s data/allservices'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)
 const [data,setData] = useState([]);

 const dispatch = useDispatch();
 const navigate = useNavigate();

   useEffect(()=>{
      try {
         service.getCurrentUser().then((res)=>{
          if (res) {
              dispatch(login(res.data))
              navigate("/")
          }else{
            dispatch(logout());
            navigate("/signup")
          }
         })
      } catch (error) {
        
      }
   },[])

  return (
    <>
    <Navbar/>
     <Outlet/>
     {/* <AllVideosPlayer/> */}
    </>
  )
}

export default App
