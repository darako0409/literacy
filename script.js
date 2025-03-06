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

// 生徒データを追加
const form = document.getElementById("addStudentForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const score = document.getElementById("score").value;

    // Firebase Realtime Databaseにデータを追加
    db.ref("students").push({
        name: name,
        score: score
    });

    // フォームをリセット
    document.getElementById("name").value = '';
    document.getElementById("score").value = '';
});

// 生徒データを表示
db.ref("students").on("value", function(snapshot) {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = ''; // 一度リストをクリア

    snapshot.forEach(function(childSnapshot) {
        const student = childSnapshot.val();
        const li = document.createElement("li");
        li.textContent = `名前: ${student.name}, 成績: ${student.score}`;
        studentList.appendChild(li);
    });
});
