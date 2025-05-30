import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/upload">Upload</Link>
      <Link to="/search">Search</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </nav>
  );
};

export default Navbar;
