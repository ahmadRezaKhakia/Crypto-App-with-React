import React from 'react';

import style from './Coin.module.css';


const coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={style.container}>
          <img className={style.image} src={image} alt={name} />
          <span className={style.name}>{name}</span>
          <span className={style.symbol}>{symbol.toUpperCase()}</span>
          <span className={style.price}>$ {price.toLocaleString('en')}</span>
          <span className={priceChange > 0 ? style.greenPriceChange : style.redPriceChange}>{priceChange}%</span>
          <span className={style.marketCap}>$ {marketCap.toLocaleString('en')}</span>
    </div>
  )
}

export default coin;