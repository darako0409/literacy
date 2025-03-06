// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyCeTizgI6pDOX4gHSQQu9Jk3Fu8venij5E",
  authDomain: "seitokannri.firebaseapp.com",
  databaseURL: "https://seitokannri-default-rtdb.firebaseio.com",
  projectId: "seitokannri",
  storageBucket: "seitokannri.firebasestorage.app",
  messagingSenderId: "45828446660",
  appId: "1:45828446660:web:d1a445f8e293c46ec46c91",
  measurementId: "G-71LQ8YKRKF"
};

// Firebaseの初期化
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
