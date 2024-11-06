
import "./knownCard.css"

export const KnownCard = ({hello, deleteOne }) => {
  return (
    <div>
      <li className={`knowncard ${hello.status? 'kweli' : 'sikweli'} `}> <span> {hello.id} </span> <span> - </span> <span className="name">{hello.name}</span> <i onClick={()=>deleteOne(hello.id)}  className="bi bi-trash"></i>
      <p>
        <span className="time"> time goes here </span>
      </p>
      </li>
    </div>
  )
}


