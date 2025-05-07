import { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'teacher') navigate('/teacher');
    if (user?.role === 'student') navigate('/student');
    if (user?.role === 'admin') navigate('/admin');
  }, [user]);
  return <p>Redirecting based on role...</p>;
};

export default Dashboard;