import { Route, Routes } from 'react-router-dom';
import { PageLogin} from './pages/Login';
import { PageRandomUser } from './pages/RandomUser';
import { RequireAuth } from './context/Auth/RequireAuth';
import { ProviderUser } from './context/UserContext/ProviderUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/random-user" element=
          {
            <RequireAuth>
              <ProviderUser>
                <PageRandomUser />
              </ProviderUser>
            </RequireAuth>
          } />
      </Routes>
    </div>
  );
}

export default App;