var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCjcgjKpsY_adlmaRk-_NZye8ubjqSiZRs",
  authDomain: "userlogin-a6101.firebaseapp.com",
  databaseURL: "https://userlogin-a6101.firebaseio.com",
  projectId: "userlogin-a6101",
  storageBucket: "userlogin-a6101.appspot.com",
  messagingSenderId: "455536724076",
  appId: "1:455536724076:web:f3d7e5a600ad329704f049",
  measurementId: "G-H51HV0ST0M",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
