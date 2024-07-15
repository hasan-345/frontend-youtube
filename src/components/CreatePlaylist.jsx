import React, { useEffect, useState } from 'react'
import service from '../API\'s data/allservices'
import { useNavigate } from 'react-router-dom'

const CreatePlaylist = () => {

 
  const navigate = useNavigate();
    const [data, setData] = useState({
      name: "",
      description: "",
      thumbnail: null
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()


       
    const handleChanges = (e)=>{
      const {name,value} = e.target
      setData({...data, [name]: value})
  }

  const handleFile = (e)=>{
    const {name} = e.target
    setData({...data,[name]: e.target.files[0]})
  }
  const create = async(e)=>{
  e.preventDefault();
 
    const formData = new FormData();

    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("thumbnail",data.thumbnail)
  
    setLoading(false);
   setError("");
    try {
          service.createPlaylist(formData).then((res)=>{
              if (res) {
                  console.log(res.data)
                  navigate(`/profile/${res.data.owner}`)
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
    <h2 className='text-center text-4xl font-semibold py-4 px-2'>Create a Playlist</h2>
    <form onSubmit={create} className='w-full'>
     <input type="text" required name='name'  placeholder = "name" value={data.name} onChange={handleChanges} className="input w-full bg-transparent border p-2 outline-none rounded my-2"/> 
     <input type="text" required name='description'  placeholder = "description" value={data.description} onChange={handleChanges} className="input w-full bg-transparent border p-2 outline-none rounded my-2"/> 
     <input type="file" name='thumbnail'  className="input w-full bg-transparent border p-2 outline-none rounded my-3"   onChange={handleFile} />
     <button type='submit' className='w-full bg-slate-900 text-white py-2 rounded-md'> {!loading? "Create": <i class='bx text-2xl bx-loader-circle bx-spin' ></i> }  </button>
      {error}
</form>
</div>
  )
}

export default CreatePlaylist