import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./pages/HomePage";
import {Route, Router, Routes} from "react-router-dom";
import OrdersSummaryPage from "./pages/OrdersSummaryPage";
import OrderPage from "./pages/OrderPage";
import HeaderComponent from "./components/headerComponent";

function App() {
  return (
      <Router>
          <HeaderComponent></HeaderComponent>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orderSummary" element={<OrdersSummaryPage />} />
          <Route path="/newOrder" element={<OrderPage />} />
        </Routes>
      </Router>
  );
}

export default App;
