import React, { useEffect } from 'react';
import { currentUser } from '../../services/authServices';
import { useAuth } from '../../hooks/useAuth';
// import { NAVIGATE } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    currentUser(setUser);
  }, [])
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user])
  return (
    <div>
      Welcome Home {user}!
    </div>
  );
}

export default Home;
