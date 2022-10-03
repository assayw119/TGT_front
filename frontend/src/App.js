import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import Post_list_page from "./routes/Post_list_page";
import Clubpage from "./routes/Clubpage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />}></Route>
                    <Route path="/Post_list" element={<Post_list_page />}></Route>
                    <Route path="/Clubpage" element={<Clubpage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
