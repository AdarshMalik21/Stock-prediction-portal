import axios from 'axios'
import React,{useEffect} from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  
    useEffect(() =>{
        const fetchProtectedData = async () =>{
          console.log("Fetching protected data...");
            try{
                const response = await axiosInstance.get('protected-view/')
                console.log("Successfull ", response.data);
                
            }catch(error){
                console.error('Fetching data error', error);
                
            }
        }
        fetchProtectedData();
    },[])


  return (
    <div>
  <h1 className='text-white'>Dashboard</h1>
  
</div>
  )
}

export default Dashboard
