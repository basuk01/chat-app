import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/signUp'
import Room from './Room'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App



// firebaseのkey
// apiKey: "AIzaSyAkPGvcUOltd850VpZVXDe_aBwEhFRvj2A",
//     authDomain: "chat-app-10fe4.firebaseapp.com",
//         databaseURL: "https://chat-app-10fe4.firebaseio.com",
//             projectId: "chat-app-10fe4",
//                 storageBucket: "chat-app-10fe4.appspot.com",
//                     messagingSenderId: "240596974953",
//                         appId: "1:240596974953:web:d5738a0fa1abca3e8211f8"