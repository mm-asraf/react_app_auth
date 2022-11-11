import React from 'react';
import Signup from '../Auth/Signup';
import Header from '../Header/Header';
import Card from '../UI/Card';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Signup />
    </div>
  );
};

export default Home;
