import {useState} from 'react'
import axios from "axios"

const Register = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [errors, seterrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) =>{
    setLoading(true)
    e.preventDefault();
    const userData = {
      username,email,password
    }
    try{
       const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
       console.log('respnse =>',response.data)
       console.log("Registeration Successfull")
       setSuccess(true)
      seterrors({})
    }catch(error ){
      seterrors(error.response.data)
      console.error('registeration error',error.response.data)
    }
    finally{
      setLoading(false)
    }
    
    console.log(userData);
  }
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-ligh-dark p-5 rounded">
                <h3 className='text-light text-center mb-4'>Create an Account</h3>
                <form onSubmit={handleRegistration}>
                  <div className="mb-3">
                      <input type="text" className='form-control ' placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)}/>
                    <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                  </div>
                    <div className="mb-3">
                      <input type="email" className='form-control ' placeholder='Email Address' value={email} onChange={(e) => setemail(e.target.value)}/>
                      <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                    </div>
                    <div className="mb-3">
                        <input type="password" className='form-control ' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}/>
                        <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                    </div>
                    {success && <div className='alert alert-success'>Registeration Successfull</div>}
                    {loading ? (<button type = 'submit' className='btn btn-info d-block mx-auto' disabled>Please Wait...</button>):(<button type = 'submit' className='btn btn-info d-block mx-auto'>Submit</button>)}
                    {/* <button type = 'submit' className='btn btn-info d-block mx-auto'>Submit</button> */}
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
