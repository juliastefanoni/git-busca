import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { missingUsername, userNotFound } from '../../utils/error';

import './styles.css';

import codeImg from '../../assets/code.svg';

const Search = () => {
  const [username, setUsername] = useState('');

  const history = useHistory();

  async function handleSearch(e) {
    e.preventDefault();

    if (!username) {
      missingUsername();
      return;
    }

    try {
      const user = await api.get(`/${username}`);

      localStorage.setItem('username', user.data.login);

      history.push('/user');
    } catch (error) {
      userNotFound();
    }
  }
  return (
    <div className="container">
      <div className="container-logo">
        <img src={codeImg} alt="Logo" width={500} />
      </div>
      <div className="container-search">
        <h1> gitbusca </h1>

        <input
          type="text"
          placeholder="Type username"
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
