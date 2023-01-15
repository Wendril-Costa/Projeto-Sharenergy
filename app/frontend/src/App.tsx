import { Route, Routes } from 'react-router-dom'
import { PageLogin} from './pages/Login'
import { PageRandomUser } from './pages/RandomUser'
import { RequireAuth } from './context/Auth/RequireAuth'
import { ProviderUser } from './context/UserContext/ProviderUser'
import { PageHttpCat } from './pages/HttpCat'
import { ProviderHttpCat } from './context/HttpCatContext/ProviderHttpCat'

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
        <Route path="/http-cat" element={
          <RequireAuth>
            <ProviderHttpCat>
              <PageHttpCat/>
            </ProviderHttpCat>
          </RequireAuth>}/>
      </Routes>
    </div>
  )
}

export default App