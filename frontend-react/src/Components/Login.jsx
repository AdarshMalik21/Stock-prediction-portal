import axios from "axios"
import { useContext, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../AuthProvider"


const Login = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true)
    const userData = {username, password}
    // console.log("UserData =>",userData);

    try{
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
      // console.log(response.data)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      setIsLoggedIn(true)
      navigate('/')
    }
    catch(error){
      console.error("Invaild Credentials")
      setError("Invaild Credentials")
    }
    finally{
      setLoading(false)
    }
    
  }
  return (
      <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-ligh-dark p-5 rounded">
                <h3 className='text-light text-center mb-4'>Login</h3>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                      <input type="text" className='form-control ' placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)}/>
                    
                  </div>
                    
                    <div className="mb-3">
                        <input type="password" className='form-control ' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}/>
                        
                    </div>

                    {error && <div className="text-danger">{error}</div>}
                    
                    {loading ? (<button type = 'submit' className='btn btn-info d-block mx-auto' disabled>Please Wait...</button>):(<button type = 'submit' className='btn btn-info d-block mx-auto'>Submit</button>)}
                    {/* <button type = 'submit' className='btn btn-info d-block mx-auto'>Submit</button> */}
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
