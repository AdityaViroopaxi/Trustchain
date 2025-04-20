// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth , GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJoF7UXC0ZjP1Y1ov9K2oilM90p7ZSCqg",
  authDomain: "blockverify-293d9.firebaseapp.com",
  projectId: "blockverify-293d9",
  storageBucket: "blockverify-293d9.firebasestorage.app",
  messagingSenderId: "98128405652",
  appId: "1:98128405652:web:0ce761c557acc608394081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google_signin");
 googleLogin.addEventListener("click", function()
 { signInWithPopup (auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
const user = result.user;
console.log(user);
window.location.href = "index1.html";

}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
});
 }
)