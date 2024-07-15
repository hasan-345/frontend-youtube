import React, { useEffect, useState } from 'react'
import service from '../API\'s data/allservices'
import { returnFormData } from '../utils/formDataReturn'
import { useNavigate, useParams } from 'react-router-dom'

const CreateVideo = (video) => {


    const navigate = useNavigate();
    const [allData,setAllData] = useState({
        title: "",
        description: "",
        thumbnail: null,
        videoFile: null
    })
     
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)

    const handleChanges = (e)=>{
        const {name,value} = e.target;
        setAllData({
            ...allData, [name]: value
        })
    }

    useEffect(()=>{
      setAllData({title:video.title, description: video.description, thumbnail: video.thumbnail, videoFile: video.videoFile })
    },[video])

    const handleFiles = (e)=>{
        const {name} = e.target;

        setAllData({
            ...allData,
            [name]: e.target.files[0]
        })
    }

    const create = async(e)=>{
    e.preventDefault();

    if (!video) {

      const formData = new FormData();

      formData.append("title",allData?.title)
      formData.append("description",allData?.description)
      formData.append("thumbnail",allData?.thumbnail)
      formData.append("videoFile",allData?.videoFile)
    
    
      setLoading(false);
     setError("");
      try {
            service.createVideo(formData).then((res)=>{
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
    }else{

      const formData = new FormData();

      formData.append("title",allData?.title)
      formData.append("description",allData?.description)
      formData.append("thumbnail",allData?.thumbnail)
      formData.append("videoFile",allData?.videoFile)
    
    
      setLoading(false);
     setError("");
      try {
            service.updateVideo(formData,video._id).then((res)=>{
                if (res) {
                     navigate(`/profile/${video.owner}`)
                }
            })
      } catch (error) {
        setError(error)
        console.log(error)
      }finally{
        setLoading(true)
      }

    }
      
    }

  return (
    <div className='w-full mt-[80px] p-4'>
        <h2 className='text-center text-4xl font-semibold py-4 px-2'>Create a Video</h2>
        <form onSubmit={create} className='w-full'>
         <input type="text" required name='title'  placeholder = "title" value={allData.fullName} onChange={handleChanges} className="input w-full bg-transparent border p-2 outline-none rounded my-2"/> 
         <input type="text" required name='description' placeholder = "Description" className="input w-full bg-transparent border p-2 outline-none rounded my-2" value={allData.email} onChange={handleChanges} />
         <input type="file" name='thumbnail' accept='image/*' className="input w-full bg-transparent border p-2 outline-none rounded my-3"   onChange={handleFiles} /> 
         <input type="file" name='videoFile' disabled={video? true: false} accept='video/*' className="input w-full bg-transparent border p-2 outline-none rounded my-3"  onChange={handleFiles} />
              
         <button type='submit' className='w-full bg-slate-900 text-white py-2 rounded-md'> {!loading? "Create": <i class='bx text-2xl bx-loader-circle bx-spin' ></i> }  </button>

    </form>
    </div>
  )
}

export default CreateVideo