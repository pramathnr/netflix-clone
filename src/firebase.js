import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCFwnMa3kMtyyhyVzYGxnPz5w0y_bSwTY",
    authDomain: "netflix-clone-f5454.firebaseapp.com",
    projectId: "netflix-clone-f5454",
    storageBucket: "netflix-clone-f5454.appspot.com",
    messagingSenderId: "849193178892",
    appId: "1:849193178892:web:03524ce009f262ea251b29"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {auth};
export default db;