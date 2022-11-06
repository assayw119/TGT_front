import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import Post_list_page from "./routes/Post_list_page";
import Clubpage from "./routes/Clubpage";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Writepage from "./routes/Writepage";
import Signup from "./routes/Signup";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />}></Route>
                    <Route path="/Post_list" element={<Post_list_page />}></Route>
                    <Route path="/Clubpage" element={<Clubpage />}></Route>
                    <Route path="/Writepage" element={<Writepage />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Logout" element={<Logout />}></Route>
                    <Route path="/Signup" element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
