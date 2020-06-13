import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRegStar } from 'react-icons/fa';
import { GoRepoForked, GoLocation } from 'react-icons/go';

import api from '../../services/api';
import orderByStars from '../../utils/orderRepositories';

import './styles.css';

const User = () => {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({});

  const username = localStorage.getItem('username');

  useEffect(() => {
    api.get(`/${username}/repos`).then( async (response) => {
      const repositoriesOrderByStars = await orderByStars(response);
      setRepositories(repositoriesOrderByStars);
    });
  }, [username]);

  useEffect(() => {
    api.get(`/${username}`).then((response) => {
      setUser(response.data);
    });
  }, [username]);

  return (
    <div className="container-user">
      <div className="profile">
        <Link to="/" className="back-link">
          <FaArrowLeft className="back-icon" />
          Search for users
        </Link>

        <img src={user.avatar_url} alt="Profile" width="150" height="150" />
        <p className="profile-name"> {user.name}</p>
        <p>
          <strong> {user.followers} </strong>followers &nbsp;
          <strong> {user.following} </strong>following
        </p>
        <p> {user.bio} </p>
      <div className="profile-details">
        <p> {user.company} </p>
        <p>
          <GoLocation size={14} />
          &nbsp; {user.location}
        </p>
      </div>
      </div>
      <div className="repositories">
        <ul>
          {repositories.map(repository => (
            <li key={repository.id}>
              <p>
                <strong> {repository.name} </strong>
              </p>
              <p>
                {repository.description}
                <span className="reactions">
                  <FaRegStar size={22} /> {repository.stargazers_count}
                  <GoRepoForked size={22} /> {repository.forks_count}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;


