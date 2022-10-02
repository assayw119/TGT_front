import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
