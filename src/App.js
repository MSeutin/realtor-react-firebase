import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import Offers from './pages/Offers';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
