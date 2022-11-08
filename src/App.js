import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import "./styles.scss";

import Dashboard from "./components/pages/Dashboard";
import SignUp from "./components/pages/SignUp";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./contexts/Auth"; 

export function App() {

    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        {/* Protected Route */}
                        <Link to="/">Dashboard</Link>
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
                <AuthProvider>
                    <Routes>
                        {/* <Route exact path='/' element={<Dashboard />}></Route> */}
                        <Route exact path='/' element={<PrivateRoute />}>
                            <Route exact path='/' element={<Dashboard />}></Route>
                        </Route>
                        <Route path="/sign-up" element={<SignUp />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </AuthProvider>
            </main>
        </div>
    );
}