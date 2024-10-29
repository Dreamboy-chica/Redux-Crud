import { useDispatch } from 'react-redux'
import './create.css'
import { useState } from 'react'
import { createUser } from '../feautres/Userdetails'
import { useNavigate } from 'react-router-dom'
const Create = () => {
  const[users,setUser]=useState(
    {
      name:"",email:"",age:"",gender:""
    }
  )

const dispatch= useDispatch()
const navigate=useNavigate()


const fun=(e)=>{
   setUser({...users,[e.target.name]:e.target.value})

}

const handleform=(e)=>{
  e.preventDefault()
  
    console.log("users...",users)
    dispatch(createUser(users))

    // Reset the form fields
  setUser({
    name: "",
    email: "",
    age: "",
    gender: ""
  })
  navigate('/read')
}

  return (
    <div>
      <h2 className='res'>Register Yourself !</h2>

<form className="w-50 mx-auto my-5" onSubmit={handleform}>
<div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control no-outline"
            name="name"
            value={users.name}
            onChange={fun}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control no-outline"
            name="email"
            value={users.email}
            onChange={fun}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control no-outline"
            name="age"
            value={users.age}
            onChange={fun}
          />
        </div>

        <label className="my-1">Gender</label>
        <div className="form-check">
          <input
            className="form-check-input no-outline"
            type="radio"
            value="male" // Corrected value here
            name="gender"
            checked={users.gender === "male"} // Controlled radio input
            onChange={fun}
          />
          <label className="form-check-label">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="female" // Corrected value here
            name="gender"
            checked={users.gender === "female"} // Controlled radio input
            onChange={fun}
          />
          <label className="form-check-label">
            Female
          </label>
        </div>


  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
      
    </div>
  );
}

export default Create;
