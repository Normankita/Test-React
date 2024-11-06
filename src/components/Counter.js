import {useState} from 'react'

const Counter = () => {

    const [number, setNumber]=useState(0);

  return (
    <div>
      <p className='numb'>{number}</p>
        <button onClick={()=> setNumber(number+1)} className='add'>ADD</button>
        <button onClick={()=> {
          if(number<=10){
            setNumber(0);
          }
          else setNumber(number-1);
        }} className='sub'>SUB</button>
    </div>
  )
}

export default Counter
