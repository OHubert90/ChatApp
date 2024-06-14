import React from 'react';
import './App.css';
import Chat from './components/Chat';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Meine Chat-Anwendung</h1>
            </header>
            <main>
                <Chat />
                {}
            </main>
            <footer>
                <p>&copy; 2024 Oliver Hubert Chat-Anwendung</p>
            </footer>
        </div>
    );
}

export default App;
