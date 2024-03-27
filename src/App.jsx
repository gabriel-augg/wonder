import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './routes'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'

import {UserProvider} from './contexts/UserContext'
import {SearchProvider} from './contexts/SearchContext'

function App() {

  return (
    <>
    <Router>
      <UserProvider>
        <SearchProvider>
          <Header/>
          <Container>
            <AppRoutes />
          </Container>
          <Footer/>
        </SearchProvider>
      </UserProvider>
    </Router>
    </>
  )
}

export default App
