import Navbar from './components/Navbar'
import Manager from './components/Manager'
import './App.css'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar />
      <div className="bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Manager />
      </div>
      <Footer />

    </>
  )
}

export default App
