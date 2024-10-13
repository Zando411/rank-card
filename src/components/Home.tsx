import React from 'react';
import { Button } from './ui/button';
import Auth from './Auth';
import { SignUpDialogComponent } from './SignUp';
import { CardWithForm } from './CardTest';
import { UserAuthForm } from './UserAuthForm';

const Home: React.FC = () => {
  return (
    <div className="text-center min-h-screen bg-background">
      <h1>Welcome to RankCard</h1>
      <p>Create your gamer profile and share your ranks!</p>
      <SignUpDialogComponent/>

      <Button variant='secondary' >Click me to Sign in!</Button>
      <Auth />
      {/* Add a button or links for users to sign up or log in */}
      <CardWithForm />
      <UserAuthForm />
    </div>
  );
};

export default Home;
