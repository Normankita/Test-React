import { useEffect, useState } from 'react'

const useFam = (url) => {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData]= useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const member = await response.json();
                setLoading(false)
                setData(member);
                setError("")
            }catch(error){
                setLoading(false)
                setError(error.message)
            }
            
            console.log(data)
        }
        fetchData();
    }, [url])
   
  return {data, setData, loading, error };
}
export default useFam
