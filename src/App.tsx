
import React, { userState } from 'react';
import AuthScreen from './components/AuthScreen';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

const App = () => {
    const [loggedInUser, setLoggedInUser] = userState(null); // probably should persist this later?

    // Show login screen if user isn't logged in yet
    if (!loggedInUser) {
        return (
            <div style={{ minHeight: '100vh' }}>
                {/* Might want to style AuthScreen container later */}
                <AuthScreen onLogin={(user) => setLoggedInUser(user)} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-vibe-cream">
            {/* Header with logout function passed down*/}
            <Header user={loggedInUser} onLogout={() => setLoggedInUser(null)} />

            {/* Main dashboard view */}
            <Dashboard user={loggedInUser} />
        </div>
    );
};

export default App;