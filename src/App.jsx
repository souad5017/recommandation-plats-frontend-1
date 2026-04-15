import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Plates from './pages/Plates';
import Login from './pages/Login';
import PlateDetail from './pages/PlateDetail';

function App() {
  return (
  
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plates" element={<Plates />} />
        <Route path="/plates/:id" element={<PlateDetail />} />
      </Routes>
    </AuthProvider>
  
  );
}

export default App;