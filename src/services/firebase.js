import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBXMRG1MFijTtOUWFFc0ZW1vQ11ea6VQlQ",
  authDomain: "lolo11.firebaseapp.com",
  databaseURL: "https://lolo11.firebaseio.com",
  projectId: "lolo11",
  storageBucket: "lolo11.appspot.com",
  messagingSenderId: "321597466820"
};
firebase.initializeApp(config);

export default firebase