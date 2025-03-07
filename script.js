import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";  // Realtime Databaseのインポート

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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);  // Realtime Databaseのインスタンスを取得

// 生徒データを追加
const form = document.getElementById("addStudentForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;

  // Firebase Realtime Databaseにデータを追加
  const studentsRef = ref(db, 'students');  // 'students'というパスの参照を作成
  push(studentsRef, {
    name: name,
    score: score
  })
  .then(() => {
    console.log('データが正常に追加されました');
    // フォームをリセット
    document.getElementById("name").value = '';
    document.getElementById("score").value = '';
  })
  .catch((error) => {
    console.error('データの追加に失敗しました:', error);
  });
});

// 生徒データを表示
const studentList = document.getElementById("studentList");

onValue(ref(db, 'students'), (snapshot) => {
  studentList.innerHTML = '';  // 一度リストをクリア

  snapshot.forEach((childSnapshot) => {
    const student = childSnapshot.val();
    const li = document.createElement("li");
    li.textContent = `名前: ${student.name}, 成績: ${student.score}`;
    studentList.appendChild(li);
  });
});

