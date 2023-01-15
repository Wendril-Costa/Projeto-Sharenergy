import { Route, Routes } from 'react-router-dom'
import { PageLogin} from './pages/Login'
import { PageRandomUser } from './pages/RandomUser'
import { RequireAuth } from './context/Auth/RequireAuth'
import { ProviderUser } from './context/UserContext/ProviderRandomUser'
import { PageHttpCat } from './pages/HttpCat'
import { ProviderHttpCat } from './context/HttpCatContext/ProviderHttpCat'
import { PageRandomDog } from './pages/RandomDog'
import { ProviderRandomDog } from './context/RandomDogContext/ProviderRandomDog'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/random-user" element={
            <RequireAuth>
              <ProviderUser>
                <PageRandomUser />
              </ProviderUser>
            </RequireAuth>
          } 
        />
        <Route path="/http-cat" element={
            <RequireAuth>
              <ProviderHttpCat>
                <PageHttpCat/>
              </ProviderHttpCat>
            </RequireAuth>
          }
        />
        <Route path="/random-dog" element={
          <RequireAuth>
            <ProviderRandomDog>
              <PageRandomDog />
            </ProviderRandomDog>
          </RequireAuth>
        }
        />
      </Routes>
    </div>
  )
}

export default App