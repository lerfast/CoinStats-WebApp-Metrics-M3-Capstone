import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from '../redux/cryptoSlice';
import './style/DetailsPage.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto.coins);
  const { id } = useParams();
  const cryptoDetails = cryptos.find((crypto) => crypto.id === id);

  useEffect(() => {
    if (!cryptos.length) {
      dispatch(fetchCryptos());
    }
  }, [dispatch, cryptos]);

  return (
    <div className="details-container">
      {cryptoDetails && (
        <div className="details-card">
          <img src={cryptoDetails.icon} alt={cryptoDetails.name} width="100" />
          <h2>
            {cryptoDetails.name}
            {' '}
            (
            {cryptoDetails.symbol}
            )
          </h2>
          <p>
            Rank:
            {cryptoDetails.rank}
          </p>
          <p>
            Price:
            {cryptoDetails.price}
          </p>
          <p>
            Price (BTC):
            {cryptoDetails.priceBtc}
          </p>
          <p>
            Volume:
            {cryptoDetails.volume}
          </p>
          <p>
            Market Cap:
            {cryptoDetails.marketCap}
          </p>
          <p>
            Available Supply:
            {cryptoDetails.availableSupply}
          </p>
          <p>
            Total Supply:
            {cryptoDetails.totalSupply}
          </p>
          <p>
            Price Change (1h):
            {cryptoDetails.priceChange1h}
            %
          </p>
          <p>
            Price Change (1d):
            {cryptoDetails.priceChange1d}
            %
          </p>
          <p>
            Price Change (1w):
            {cryptoDetails.priceChange1w}
            %
          </p>
          <p>
            Website:
            <a href={cryptoDetails.websiteUrl} target="_blank" rel="noopener noreferrer">Visit</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
