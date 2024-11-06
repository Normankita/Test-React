import { useState } from "react"
import "./AddFam.css"
export const AddFam = ({user, setUser, error}) => {


    const [FamValue, setFamValue] = useState("");
    const [gender, setGender] = useState(false)
    const handleChange= (event)=>{
        // console.log(event.target.value)
        setFamValue(event.target.value)
    }
    const handleReset= () => {
        setFamValue("");
        setGender(false);
    }

    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newFamValue = {
            id: Math.floor(Math.random() * 10000),
            name: FamValue,
            age: 10,
            status:Boolean(gender) 
        }
        setUser([...user, newFamValue]);

        console.log(newFamValue)
        handleReset()
    }

  return (
   <section className="addfam" >
    {(error==="")&& <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="famname">Family member Name:</label>
        <input onChange={ handleChange } type="text" name="famname" id="famname" placeholder=" Member name " autoComplete="off" value={FamValue}/>
        <select name="status" onChange={handleGender} value={gender}>
            <option value="false">male</option>
            <option value="true">female</option>
        </select>
        <button type="submit" >Add Member</button>
        <span onClick={handleReset} >Reset</span>
    </form>
    </div>}
   </section>
  )
}