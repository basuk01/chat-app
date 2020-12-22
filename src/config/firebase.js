import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyAkPGvcUOltd850VpZVXDe_aBwEhFRvj2A",
    authDomain: "chat-app-10fe4.firebaseapp.com",
    databaseURL: "https://chat-app-10fe4.firebaseio.com",
    projectId: "chat-app-10fe4",
    storageBucket: "chat-app-10fe4.appspot.com",
    messagingSenderId: "240596974953",
    appId: "1:240596974953:web:d5738a0fa1abca3e8211f8"
}

firebase.initializeApp(firebaseConfig)

export default firebase