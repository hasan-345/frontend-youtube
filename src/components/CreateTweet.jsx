import React, { useEffect, useState } from 'react'
import service from '../API\'s data/allservices'
import { returnFormData } from '../utils/formDataReturn'
import { useNavigate } from 'react-router-dom'
const CreateTweet = () => {

    const navigate = useNavigate();
    const [content,setContent] = useState()
     
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)

    const handleChanges = (e)=>{
        setContent(e.target.value)
    }

    const create = async(e)=>{
    e.preventDefault();

      const formData = new FormData();

      formData.append("content",content)
    
      setLoading(false);
     setError("");
      try {
            service.createTweet(formData).then((res)=>{
                if (res) {
                    console.log(res.data)
                }
            })
      } catch (error) {
        setError(error)
        console.log(error)
        setLoading(false)
      }finally{
        setLoading(true)
      }
    }


    return (
        <div className='w-full mt-[80px] p-4'>
        <h2 className='text-center text-4xl font-semibold py-4 px-2'>Create a tweet</h2>
        <form onSubmit={create} className='w-full'>
         <input type="text" required name='content'  placeholder = "content" value={content} onChange={handleChanges} className="input w-full bg-transparent border p-2 outline-none rounded my-2"/> 
         <button type='submit' className='w-full bg-slate-900 text-white py-2 rounded-md'> {!loading? "Create": <i class='bx text-2xl bx-loader-circle bx-spin' ></i> }  </button>

    </form>
    </div>
  )
}

export default CreateTweet