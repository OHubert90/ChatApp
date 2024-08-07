import React, {useState} from 'react';
import {useAuth} from './AuthProvider';
import './LoginPage.css';
import {useNavigate} from "react-router-dom";


const LoginPage: React.FC = () => {
    const {login, register} = useAuth();
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(loginUsername, loginPassword);
            navigate('/app/MainPage');
        } catch (err) {
            setError('Login failed');
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(regUsername, regPassword);
            navigate('/app/MainPage');
        } catch (err: unknown) {
            if (err instanceof Error) {
                if (err.message === 'Username already exists') {
                    setError('Username already exists');
                } else {
                    setError('Registration failed');
                }
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button className="login-button" type="submit">Login</button>
                </form>
                <h1>Or Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="reg-username">Username</label>
                        <input
                            type="text"
                            id="reg-username"
                            value={regUsername}
                            onChange={(e) => setRegUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-password">Password</label>
                        <input
                            type="password"
                            id="reg-password"
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button className="register-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
