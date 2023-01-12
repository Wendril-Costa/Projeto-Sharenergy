import { Route, Routes } from 'react-router-dom';
import { Login} from './pages/Login';
import { RandomUser } from './pages/RandomUser';
import { RequireAuth } from './context/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/random-user" element={<RequireAuth><RandomUser /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;