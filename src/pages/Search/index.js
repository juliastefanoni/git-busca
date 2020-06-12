import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import api from '../../services/api';

import './styles.css';

import codeImg from '../../assets/code.svg';

const Search = () => {
  const [username, setUserName] = useState('');

  const history = useHistory();

  async function handleSearch(e) {
    e.preventDefault();

    if (!username) {
      swal({
        icon: 'error',
        title: 'Ops!',
        text: 'Enter username to continue.',
        buttons: false,
        timer: 2000,
      });
      return;
    }

    try {
      const user = await api.get(`/${username}`);
      console.log(user);

      localStorage.setItem('username', user.data.login);

      history.push('/user');
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Ops, user not found!',
        text: 'Try again.',
        buttons: false,
        timer: 2000,
      });
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
          onChange={(event) => setUserName(event.target.value)}
        />

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
