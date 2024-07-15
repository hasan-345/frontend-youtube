import React, { useEffect, useState } from 'react'
import service from '../API\'s data/allservices'
import { useSelector } from 'react-redux'

const AddVideoPlaylist = ({toggleShow,changeShow,videoId}) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [selectedOption, setSelectedOption] = useState('');

    const userData = useSelector((state)=> state.userData)
    useEffect(()=>{
        setLoading(false)
        setError(null)
          try {
                service.getUserPlaylist(userData._id).then((res)=>{
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
    },[toggleShow])

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(selectedOption)
      };
    
      const addVideo = async()=>{
        try {
            service.addVideoToPlaylist(selectedOption,videoId).then((res)=>{
                if (res) {
                    console.log(res.data)
                    changeShow(false)
                }
            })
        } catch (error) {
            
        }
      }

  return (
    <div className={`fixed top-0 right-0 left-0 bottom-0 z-40 ${toggleShow? "": "hidden"} backdrop-blur-[20px] flex justify-center items-center w-[100vw] min-h-[100vh]`}>
          <div className='w-[400px]  border min-h-[200px]  rounded-md bg-slate-100 shadow-md text-white'>
             <h2 className='text-center text-xl font-semibold text-black py-4 px-3'>Select a Playlist</h2>
               {data?.length === 0? (<div className='flex items-center w-full my-10 justify-center'>
               <p className='text-2xl text-neutral-400'>Nothing!</p>
            </div>): (
              <div className='p-4'>
              {data?.map((item,i)=>(
                <div key={item._id}>
                     <input 
            type="radio" 
            name="selection" 
            id={`button-${item._id}`} 
            value={item._id} 
            onChange={handleChange} 
            checked={selectedOption == item._id}
            disabled={selectedOption && selectedOption !== item._id}
          />
          <label htmlFor={`button-${item._id}`} className='cursor-pointer text-black'> 
            {item.name} 
          </label>
                </div>
              ))}
              </div>

            )}
              
          <div className=' flex gap-2 items-end justify-end  right-3 text-black'><button className='px-3 rounded py-2 border border-neutral-300 bg-transparent' onClick={()=> changeShow(false)}>Cancel</button> <button className='px-3 rounded py-2 border border-neutral-300 bg-blue-500 text-white disabled:bg-slate-400 disabled:cursor-not-allowed' type='submit' disabled={selectedOption === ''?true: false} onClick={addVideo}>Save</button>  </div>
          </div>
    </div>
  )
}

export default AddVideoPlaylist