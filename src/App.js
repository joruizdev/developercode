// import { Button } from './components/InputIndex'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'

function App () {
  return (
    <div className='App'>
      <Header />
      <div className='container mx-auto h-screen -mt-20'>
        <Home />
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App
