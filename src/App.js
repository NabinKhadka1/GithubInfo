import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Error from "./components/Error";
import PrivateRoute from "./components/PrivateRoute";
import AuthContainer from "./components/AuthContainer";

export default function App() {
  return (
    <AuthContainer>
      <Router>
        <Routes>
          <Route
            path="/"
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthContainer>
  );
}
