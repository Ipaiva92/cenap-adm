
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Header from './pages/header';

function App() {

  return (
    <>
      <Header />
      <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/> 
        </Routes>
      </ BrowserRouter>
    </div>
    </>
  )
}

export default App