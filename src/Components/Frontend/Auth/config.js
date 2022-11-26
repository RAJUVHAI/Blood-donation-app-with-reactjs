import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvUk2V3qaK_GyAv0Lnpbpjb85qC2ZeXdI",
  authDomain: "blood-donation-51a66.firebaseapp.com",
  projectId: "blood-donation-51a66",
  storageBucket: "blood-donation-51a66.appspot.com",
  messagingSenderId: "989587026397",
  appId: "1:989587026397:web:977db9abf694c18c224634",
  measurementId: "G-CS0PWLCVD8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const gooprovider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();
export { auth, gooprovider,gitprovider };
