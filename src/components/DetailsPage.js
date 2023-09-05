import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { id } = useParams();
  const crypto = useSelector((state) => state.crypto.coins.find((coin) => coin.id === id));

  if (!crypto) return <div>Coin not found!!!</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={crypto.icon} alt={crypto.name} width="100" />
      <h1>
        {crypto.name}
        {' '}
        (
        {crypto.symbol}
        )
      </h1>
      <p>
        Rank:
        {crypto.rank}
      </p>
      <p>
        Price:
        {crypto.price}
      </p>
      <p>
        Price (BTC):
        {crypto.priceBtc}
      </p>
      <p>
        Volume:
        {crypto.volume}
      </p>
      <p>
        Market Cap:
        {crypto.marketCap}
      </p>
      <p>
        Available Supply:
        {crypto.availableSupply}
      </p>
      <p>
        Total Supply:
        {crypto.totalSupply}
      </p>
      <p>
        Price Change (1h):
        {crypto.priceChange1h}
        %
      </p>
      <p>
        Price Change (1d):
        {crypto.priceChange1d}
        %
      </p>
      <p>
        Price Change (1w):
        {crypto.priceChange1w}
        %
      </p>
      <p>
        Website:
        <a href={crypto.websiteUrl} target="_blank" rel="noopener noreferrer">Visit</a>
      </p>
    </div>
  );
}

export default DetailsPage;
