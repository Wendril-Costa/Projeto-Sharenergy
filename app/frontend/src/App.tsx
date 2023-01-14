import { Route, Routes } from 'react-router-dom';
import { PageLogin} from './pages/Login';
import { PageRandomUser } from './pages/RandomUser';
import { RequireAuth } from './context/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/random-user" element={<RequireAuth><PageRandomUser /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;