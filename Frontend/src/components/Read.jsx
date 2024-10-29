import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './create.css'
import { showUser } from '../feautres/Userdetails'

const Read = () => {
    const dispatch=useDispatch()
    const {users,loading}=useSelector((state)=>state.app)

    useEffect(()=>{
          dispatch(showUser())
    },[])

if(loading)
{
    return <h2>Loading...</h2>
}

  return (
    <div>
      <h1 className="res">All Users Data</h1>

      <div>
        { 

        users && users.map((ele)=>(

        <div className="card w-50 mx-auto my-2"  key={ele.id}>
      <div className="card-body">
      <h5 className="card-title text-danger">{ele.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
      <p className="card-text">{ele.age}</p>
      <p className="card-text">{ele.gender}</p>

      </div>
      </div>

        ))}

      </div>

    </div>
  )
}

export default Read;
