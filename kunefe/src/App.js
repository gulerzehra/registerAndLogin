import LoginPage from './pages/Login/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
    </Routes>
    </BrowserRouter>
     
  );
}


export default App;
