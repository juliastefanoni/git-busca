import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import codeImg from '../../assets/code.svg';

const Search = () => {
  return (
    <div className="container">
      <div className="container-logo">
        <img src={codeImg} alt="Logo" width={500} />
      </div>
      <div className="container-search">
        <h1> gitbusca </h1>

        <input type="text" placeholder="Digite o username" />

        <Link to="/user">
          <button type="submit"> Pesquisar </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
