import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAStJFq_y_gmRdlTP13n2StJj1_QeLVPw",
    authDomain: "instragram-41242.firebaseapp.com",
    databaseURL: "https://instragram-41242.firebaseio.com",
    projectId: "instragram-41242",
    storageBucket: "instragram-41242.appspot.com",
    messagingSenderId: "971697335251",
    appId: "1:971697335251:web:4c3c2f60d4213b43441d26",
    measurementId: "G-LGKZE214FS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {
    db,
    auth,
    storage
};