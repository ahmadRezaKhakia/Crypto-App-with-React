import React, { useEffect , useState } from 'react';

//API
import { getcoin } from '../services/api';

//components
import Loader from './Loader';
import Coin from '../components/coin';

import style from './Landing.module.css';

const Landing = () => {
     
    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState('');

    useEffect(()=>{
        const fetchAPI = async () => {
            const data = await getcoin();
            console.log(data);
            setCoins(data);
        }
        fetchAPI();
    },[])

    const searchHandler = event => {
       setSearch(event.target.value)
  }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
      <div className={style.container}>
          
          <input className= {style.input} type="text" placeholder='Search' value={search} onChange = {searchHandler} />
          {
              coins.length ?
          <div className={style.coinContainer}>
              {
                          searchedCoins.map(coin => <Coin
                              key= {coin.id}
                              name= {coin.name}
                              image= {coin.image}
                              symbol={coin.symbol}
                              price={coin.current_price}
                              marketCap={coin.market_cap}
                              priceChange = {coin.price_change_percentage_24h}
                          />) 
              }
                  </div> :
                  <Loader/>
          }
      </div>
  )
}
export default Landing;