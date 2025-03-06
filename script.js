// Firebaseの設定
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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

    db.ref("students").push({
        name: name,
        score: score
    });

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
