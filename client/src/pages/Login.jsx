import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import TopNav from '../components/homeComponents/TopNav.jsx';
import heroImage from '../assets/images/hero-image.jpg';
import Loading from '../components/Loading.jsx';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { user, setUser, userType, backendURL } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // loading state
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    } else {
      setLoading(false);
    }
  }, [user, navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading while login
    try {
      const res = await axios.post(`${backendURL}/api/auth/login`, form);
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed.');
      setLoading(false); // Stop loading if login failed
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* TopNav */}
      <div className="relative z-20">
        <TopNav />
      </div>

      {/* Login Content */}
      <div className="flex-grow flex items-center justify-center relative z-10 px-4">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Welcome to CampusConnect
          </h1>
          <p className="mt-2 bg-black bg-opacity-80 inline-block px-4 py-2 rounded text-sm md:text-base shadow-md">
            Empowering Minds, Shaping Futures —{' '}
            <span className="text-yellow-400 font-semibold">
              Welcome to CampusConnect
            </span>
          </p>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login {userType}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email ID
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <Link to="/forgot" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;