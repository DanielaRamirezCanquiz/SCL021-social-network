/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { onNavigate } from "../main.js";
//import { post } from "../pages/post.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcmRcn_Cf0UNCMSgEPO0IwaraE8bQEg5U",
  authDomain: "true-lache.firebaseapp.com",
  projectId: "true-lache",
  storageBucket: "true-lache.appspot.com",
  messagingSenderId: "153553252472",
  appId: "1:153553252472:web:7a3d9d2f61702f73083d8d",
  measurementId: "G-EPCZ497K2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export default { db, auth };
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//ingresar con google
export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  return onNavigate("/post");
};

//Sign Out Google
export const signOutGoogle = () => {
  signOut(auth)
    .then(() => {
      onNavigate("/");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      // console.log(error.message);
    });
};
//agregar post a la nube de firebase
export const addPost = async () => {
  const post = document.getElementById("inputPost").value;
  const nameUser = document.getElementById("name").value;
  const numberUser = document.getElementById("number").value;
  const docRef = await addDoc(collection(db, "post"), {
    name: nameUser,
    title: post,
    number: numberUser,
  });
  //console.log("Document written with ID: ", docRef.id);
};

//Ver en consola los post de la nube
// finalPost corresponde a tareaFinal
//imprimir los post al muro
export const getPost = async (finalPost) => {
  // const posts = [];
  // const postDiv = document.getElementById('printPost');
  const querySnapshot = await getDocs(query(collection(db, "post")));
  querySnapshot.forEach((doc) => {
    //const posts = doc.data();
    //console.log(doc.id, " => ", doc.data());
    finalPost(doc.data());
    //   posts.push({
    //     id: doc.id,
    //     ...doc.data()
    //   });
    // });
    // return posts;
  });
};

/*const printPost = async () => {
  const posts = await getPost();

  const wallPost = document.getElementById("wall");
  wallPost.appendChild(posts);
};
printPost(); */

// Ver en el muro los post de la nube
/*const getCollection = (tareaFinal) => {
  const consulta = query(collection (db, "usuarios"));
  const unsubcribe = onSnapshot (consulta, (resultadosConsulta) => {
    const misPosts = [];
     resultadosConsulta.forEach((doc) => {
      console.log({doc})
      console.log({data: doc.data()})
      misPosts.push(doc.data());
     });
     tareaFinal(misPosts)
  });
}
const root = document.getElementById("root")

getCollection((postsObtenidos) => {
  postsObtenidos.forEach((unPost) => {
     let paragragh = document.createElement("p")
     paragragh.inertHTML = `<span>${unPost.texto}</span>`
     root.appendChild(paragragh)
});
}); */
