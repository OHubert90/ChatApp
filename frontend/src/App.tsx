import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginPage from './LoginPage.tsx'
import MainPage from './MainPage.tsx';
import { AuthProvider } from './AuthProvider';
import PrivateRoute from "./PrivateRoute.tsx";

const App: React.FC = () => {
    return (
        <AuthProvider>
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">LoginPage</Link>
                    </li>
                    <li>
                        <Link to="/app/MainPage/">MainPage</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/app" element={<PrivateRoute/>}>
                    <Route path="MainPage/" element={<MainPage />}  />
                </Route>
            </Routes>

        </div>
        </Router>
        </AuthProvider>
    );
}

export default App;
