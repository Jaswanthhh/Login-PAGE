import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import EmployeeVerification from "./pages/EmployeeVerification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/employee-verification" element={<EmployeeVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
