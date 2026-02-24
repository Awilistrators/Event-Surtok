// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDAuW3ZoAQrWxG2V211l6pHM5J-c_EWveo",
  authDomain: "suryatokoku-event.firebaseapp.com",
  databaseURL: "https://suryatokoku-event-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suryatokoku-event",
  storageBucket: "suryatokoku-event.firebasestorage.app",
  messagingSenderId: "16304012353",
  appId: "1:16304012353:web:40de1cd98b94462803dac0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
