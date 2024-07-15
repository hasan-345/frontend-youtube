import React, { useState } from 'react'
import Container from './Container'
import service from '../API\'s data/allservices'
import { useDispatch } from 'react-redux'
import {login} from "../store/authSlice"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [lock,setLock] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();

    const [allData,setAllData] = useState({
        fullName: "",
        username: "",
        password: "",
        email: "",
        avatar: null,
        coverImage: null
    })

    const handleChanges = (e)=>{
        const {name,value} = e.target;
        setAllData({
            ...allData, [name]: value
        })
    }

    const handleFiles = (e)=>{
        const {name} = e.target;

        setAllData({
            ...allData,
            [name]: e.target.files[0]
        })
    }

   const signup = async(e)=>{
   e.preventDefault();

   const formObjeData = new FormData()
    formObjeData.append("fullName",allData.fullName)
    formObjeData.append("email",allData.email)
    formObjeData.append("password",allData.password)
    formObjeData.append("username",allData.username)
    formObjeData.append("avatar",allData.avatar)
    formObjeData.append("coverImage",allData.coverImage)

    const loginForm = new FormData();

    loginForm.append("email",allData.email);
    loginForm.append("password",allData.password);

   console.log(allData)
       try { 
        service.createAccount(formObjeData,loginForm).then((res)=>{
           if (res) {
              dispatch(login(res.data))
              navigate("/")
           }
        })
       } catch (error) {
         setError(error.message);
         setLoading(false)
       } finally{
           setLoading(true);
       }
   }
   

  return (
    
        <div className='pt-[150px] m-4 max_width_contain flex justify-center items-center min-h-[100%]'>
        <div className="form text-black border rounded">
            <div className="flex flex-col border-slate-50 m-3">
            <h1 className='text-center text-4xl font-bold py-6'>Sign Up</h1>
    <form onSubmit={signup} className='max-w-[400px] flex-1'>
         <input type="text" required name='fullName'  placeholder = "Enter your channel name" value={allData.fullName} onChange={handleChanges} className="input w-full bg-transparent border p-2 outline-none rounded my-2"/> 
         <input type="text" required name='email' placeholder = "Enter your email" className="input w-full bg-transparent border p-2 outline-none rounded my-2" value={allData.email} onChange={handleChanges} />
         <input type="text" required name='username' placeholder = "Enter your username" className="input w-full bg-transparent border p-2 outline-none rounded my-2" value={allData.username} onChange={handleChanges} />
         Profile pic:
         <input type="file" name='avatar'  className="input w-full bg-transparent border p-2 outline-none rounded mb-3 mt-1"   onChange={handleFiles} />

         Cover Image:
         <input type="file" name='coverImage'  className="input w-full bg-transparent border p-2 outline-none rounded mb-3 mt-1"  onChange={handleFiles} />
         
         <input required type='password' name='password' value={allData.password} onChange={handleChanges} placeholder = "Enter your password" className="outline-none input w-full bg-transparent border p-2 rounded my-1 mb-4"/>
              
         <button type='submit' className='w-full bg-slate-900 text-white py-2 rounded-md'> {!loading? "SignUp": <i class='bx text-2xl bx-loader-circle bx-spin' ></i> }  </button>

    </form>
              <p className='py-4 text-center'>Already have an account <Link to="/login" className='text-black underline' > Login </Link>  </p>
               <p>{error}</p>
               <div className="error" style={{textAlign:"centre", color:"black"}}> {error} </div>
               </div>
               </div>    
        </div>
  )
}

export default Signup



