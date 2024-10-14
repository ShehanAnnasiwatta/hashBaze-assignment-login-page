import React, { useEffect } from 'react';
import { currentUser } from '../../services/authServices';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {

  const { user, setUser } = useAuth()

  useEffect(() => {
    currentUser(setUser);
    // setUser(loggedUser);
  }, [])
  return (
    <div>
      Welcome Home {user}!
    </div>
  );
}

export default Home;
