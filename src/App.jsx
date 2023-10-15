import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/profile' element={<Profile />} />
          <Route path='/home/settings' element={<Settings />} />
          <Route path='/home/create' element={<Create />} />
          <Route path='/home/edit' element={<Edit />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
