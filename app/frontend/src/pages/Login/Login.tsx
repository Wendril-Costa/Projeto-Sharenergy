import { Routes, Route, Navigate, Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <form>
      <h1>Login</h1>
      <nav>
        <Link to="/random-user">Login</Link>
        <Link to="/register">register</Link>
      </nav>
    </form>
  );
};

export default Login;