import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRegStar } from 'react-icons/fa';
import { GoRepoForked, GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';

import './styles.css';

const User = () => {
  return (
    <div className="container-user">
      <div className="profile">
        <Link to="/" className="back-link">
          <FaArrowLeft className="back-icon" />
          Search for users
        </Link>

        <img src="#" alt="Profile" width="150" height="150" />
        <p className="profile-name">Julia Stefanoni Mendes</p>
        <p>
          <strong> 410 </strong>followers &nbsp;
          <strong> 18505 </strong>following
        </p>
        <p> Software Developer </p>
      </div>
      <div className="profile-details">
        <p>
          <AiOutlineMail size={14} />
          &nbsp; juliastefanonidev@gmail.com
        </p>
        <p>
          <GoLocation size={14} />
          &nbsp; São paulo
        </p>
      </div>
      <div className="repositories">
        <ul>
          <li>
            <p>
              <strong>Semana OmniStack 11 - be the hero</strong>
            </p>
            <p>
              Projeto desenvolvido na semana OmniStack usando react e node
              <span className="reactions">
                <FaRegStar size={22} /> 150
                <GoRepoForked size={22} /> 20
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
