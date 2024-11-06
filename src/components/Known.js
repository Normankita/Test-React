import { useState } from "react"
import './Known.css'
import {KnownCard} from "./KnownCard";

export const Known = ({ user , setUser, url ,setUrl, loading, error }) => {
  
    const [show, setShow]= useState(true);
  

    console.log(user)
    

    function deleteOne(id) {
        console.log(id);
        setUser(user.filter(user=>user.id !== id))
      }

  return (
    <section className="showTask">
      <div className="head">
      <button onClick={()=>setShow(!show)} className='toggle'>toggle</button>
            <button onClick={()=>setUrl("http://localhost:8000/user?status=true")} >female</button>
            <button onClick={()=>setUrl("http://localhost:8000/user?status=false")} >male</button>
      </div>
    <div className={error? "bad" : "good"}>
      {loading &&<p>Fetching Data... </p>}
      <p>{error}</p>
      {error==""&&<><h1>List of people
          </h1>
          <ul>
            { user && show && user.map((hello)=>(
               <KnownCard key={hello.id} hello={hello} deleteOne={deleteOne}/> 
            ))}
          </ul></>}
    </div>
    </section>
    
  )
}


