import axios from 'axios'
import React,{useEffect, useState} from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [plot, setPlot] = useState();
  const [ma100, setMa100] = useState();
  const [ma200, setMa200] = useState();
  const [prdiction, setPrediction] = useState();
    useEffect(() =>{
        const fetchProtectedData = async () =>{
          console.log("Fetching protected data...");
            try{
                const response = await axiosInstance.get('protected-view/')
                // console.log("Successfull ", response.data);
                
            }catch(error){
                console.error('Fetching data error', error);
                
            }
        }
        fetchProtectedData();
    },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const response = await axiosInstance.post('/predict/', {ticker: ticker});
      console.log('Ticker submitted successfully:', response.data);
      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;
      const plotUrl = `${backendRoot}${response.data.plot_img}`;
      const ma100url = `${backendRoot}${response.data.plot_100_dma}`;
      const ma200url = `${backendRoot}${response.data.plot_200_dma}`;
      const predictionUrl = `${backendRoot}${response.data.plot_Prediction}`;
      setPlot(plotUrl);
      setMa100(ma100url);
      setMa200(ma200url);
      setPrediction(predictionUrl);
      if(response.data.error) {
        setError(response.data.error);
      }
    }catch(error){
      console.error('Error submitting ticker:', error);
      
    }
    finally{
      setLoading(false);
    }
  }

return (
  <div className='container'>
    <h1>Dashboard</h1>
    <div className="row">
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='form-control'
            placeholder='Enter stock ticker'
            onChange={(e) => setTicker(e.target.value)}
            required
          />
          {error && <div className='text-danger mt-2'>{error}</div>}
          <button type='submit' className='btn btn-info mt-3'>
            {loading ? 'Loading...' : 'Submit Ticker'}
          </button>
        </form>
      </div>

      <div className="prediction mt-5">
        <div className="p-5">
          {plot && (<img src = {plot} style={{width: '100%'}} alt="Prediction Plot" />)}
        </div>
      </div>
      <div className="prediction mt-5">
        <div className="p-5">
          {plot && (<img src = {ma100} style={{width: '100%'}} alt="Prediction Plot" />)}
        </div>
      </div>

      <div className="prediction mt-5">
        <div className="p-5">
          {ma200 && (<img src = {ma200} style={{width: '100%'}} alt="Prediction Plot" />)}
        </div>
      </div>

      <div className="prediction mt-5">
        <div className="p-5">
          {prdiction && (<img src = {prdiction} style={{width: '100%'}} alt="Prediction Plot" />)}
        </div>
      </div>


    </div>
  </div>
)
}

export default Dashboard
