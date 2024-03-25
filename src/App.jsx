import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './routes'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'

import {UserProvider} from './contexts/UserContext'

function App() {

  return (
    <>
    <Router>
      <UserProvider>
        <Header/>
        <Container>
          <AppRoutes />
        </Container>
        <Footer/>
      </UserProvider>
    </Router>
    </>
  )
}

export default App
