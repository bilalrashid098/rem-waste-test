import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./pages";
import "./assets/style/global.css";

/**
 * Main App component
 * Implements routing with React Router
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />

        {/* If route does not exits show 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
