import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/react-weather" replace />} />
        <Route path="/react-weather" element={<App />} />
      </Routes>
    </Router>
  );
};
