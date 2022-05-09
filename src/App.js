import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Product from "./views/Product"
import Login from "./views/Login"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
