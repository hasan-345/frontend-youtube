import React, { useState } from 'react'
import Container from './Container'
import service from '../API\'s data/allservices'
import { useDispatch } from 'react-redux'
import {login} from "../store/authSlice"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { returnFormData } from '../utils/formDataReturn'

const Login = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    const [lock,setLock] = useState(false);
    const [allData,setAllData] = useState({
        password: "",
        email: "",
    })

    const handleChanges = (e)=>{
        const {name,value} = e.target;
        setAllData({
            ...allData, [name]: value
        })
    }


   const logined = async(e)=>{
    e.preventDefault()
   const formData = returnFormData(allData);

    
       try {
        service.login(formData).then((res)=>{
           if (res) {
            dispatch(login(res.data))
              navigate("/");
           }
        })
       } catch (error) {
        setError(error.message)
        console.log(error)
       }finally{
        setLoading(true);
       }
   }
   

  return (
    
        <div className='pt-[150px]  max_width_contain flex justify-center items-center min-h-[100%]'>
        <div className="form text-black border rounded">
            <div className="flex flex-col border-slate-50 m-3">
            <h1 className='text-center text-4xl font-bold py-6'>Login</h1>
    <form onSubmit={logined} className='max-w-[400px] flex-1'>
         <input required type="text" name='email' placeholder = "Enter your email" className="input w-full bg-transparent border p-2 outline-none rounded my-2" value={allData.email} onChange={handleChanges} />
         <input required type='password' name='password' value={allData.password} onChange={handleChanges} placeholder = "Enter your password" className="outline-none input w-full bg-transparent border p-2 rounded my-2"/>
              
             <button type='submit' className='w-full bg-slate-900 text-white py-2 rounded-md my-2'>  {!loading? "Login": <i class='bx text-2xl bx-loader-circle bx-spin' ></i> } </button>
    </form>
              <p className='py-4 text-center'>Don't have an account <Link to="/signup" className='text-black underline' > SignUp </Link>  </p>
               <div className="error" style={{textAlign:"centre", color:"white"}}>  </div>
               </div>
               </div>    
        </div>
  )
}

export default Login;