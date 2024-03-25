import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './routes'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Container>
        <AppRoutes />
      </Container>
      <Footer/>
    </Router>
    </>
  )
}

export default App
