import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import "./styles.scss";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";

export function App() {

    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        {/* Protected Route */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </main>
        </div>
    );
}