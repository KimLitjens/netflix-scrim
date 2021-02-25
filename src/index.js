import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import { FirebaseConfig } from './firebaseConfig';


// import { seedDatabase } from './seed';

const firebase = window.firebase.initializeApp(FirebaseConfig);
// seedDatabase(firebase)
ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);