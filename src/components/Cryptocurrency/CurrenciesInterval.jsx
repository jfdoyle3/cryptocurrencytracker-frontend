import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  CurrencyInterval from './Models/CurrencyInterval';


const CurrenciesInterval = () => {
  const[currenciesInterval,setCurrenciesInterval]=useState([]);
  const [loading, setLoading]=useState(true); 

  useEffect(()=> {
    console.log("CurrenciesInterval - use Effect Acitvated!!!");
    const _getAllCurrencies=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/interval/BTC/7d`);
        console.log(res.data);
        setLoading(false);
        setCurrenciesInterval(res.data);
      }catch(err){
        console.error(err.message);
      }

    }
    setLoading(true)
    _getAllCurrencies();
  },[])

  const displayCurrencies = () => {
    return currenciesInterval.map(info => <CurrencyInterval currencyInterval={info} key={info.ranking} />)
  }

  // const onSelect = (devId) => {
  //   navigate(`/developers/${devId}`)
  // }

  return (

    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Currencies</h1>
      {loading ? 
        <Spinner /> 
      :
        displayCurrencies()
      }
    </div>
    
  )
}

export default CurrenciesInterval;