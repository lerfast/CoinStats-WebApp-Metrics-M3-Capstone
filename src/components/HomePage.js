// pages/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCryptos } from '../redux/cryptoSlice';

function HomePage() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto.coins);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Find Crypto...."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ margin: '20px', padding: '10px', width: '300px' }}
      />
      {filteredCryptos.map((crypto) => (
        <div key={crypto.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <img src={crypto.icon} alt={crypto.name} width="50" />
          <h2>
            {crypto.name}
            {' '}
            (
            {crypto.symbol}
            )
          </h2>
          <p>
            Rank:
            {crypto.rank}
          </p>
          <p>
            Price:
            {crypto.price}
          </p>
          <Link to={`/details/${crypto.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
