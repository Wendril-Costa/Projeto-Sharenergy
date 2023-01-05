import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import RandomUser from './pages/RandomUsers/RandomUser';

function App() {
  return (
    <Routes>
      <Route path="/random-user" element={ <RandomUser /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
