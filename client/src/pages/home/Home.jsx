import React, { useEffect } from 'react';
import { currentUser } from '../../services/authServices';

const Home = () => {

  useEffect(() => {
    currentUser()
  }, [])
  return (
    <div>
      Welcome Home!
    </div>
  );
}

export default Home;
