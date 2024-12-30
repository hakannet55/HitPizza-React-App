import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import OrdersSummaryPage from "./pages/OrdersSummaryPage";
import OrderPage from "./pages/OrderPage";
import HeaderComponent from "./components/headerComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/orderSummary" element={<OrdersSummaryPage/>}/>
                    <Route path="/newOrder" element={<OrderPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
