import React from 'react';
import { Button } from './ui/button';
import Auth from './auth';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1>Welcome to RankCard</h1>
      <p>Create your gamer profile and share your ranks!</p>
      <Button >Click me!</Button>
      <Auth></Auth>
      {/* Add a button or links for users to sign up or log in */}
    </div>
  );
};

export default Home;
