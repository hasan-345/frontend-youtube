import service from '../API\'s data/allservices'
import React, {useState} from 'react'

export async function getAllComments(userId){
     
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState() 

    if (userId) {
        try {
            service.getAllcomments(userId).then((res)=>{
                if(res){
                   setData(res.data)
                }
            })
         } catch (error) {
            setError(error.message)
         } finally{
            setLoading(true)
         }
          }

  return {
   data,loading,error
  }

}