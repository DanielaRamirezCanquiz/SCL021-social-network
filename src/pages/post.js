import { signOutGoogle } from "../firebase.js";
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { db } from '../firebase.js';

export const post = () => {
  const container = document.createElement("div");
  const html = `
  <div class= "loginView" >
  <header class="headerPost">
    <div class="containerLogoPost">
      <img class="logo" src="./img/logo-sin-fondo.png" alt="logo"/>
      <h1 class="h1Post">TRUELACHE</h1> 
    </div>
  </header>
 <div class = "post"> 
  <input type="text" id="name" class="name" placeholder="Ingresa tu nombre"></input>
    <textarea class="inputPost" id="inputPost" rows="4" cols="30" placeholder = "Escribe aquí tu..."></textarea>
     
    <input type="tel" id="number" class="number" placeholder="+56 9 xxxx xxxx "></input>
      <div class = "btnSend">
      <button type="button" class="buttonPost"><img class="imgBtnPost" src="./img/send.png"></button>
     </div>
</div> 
</div>
<footer class="btnMenu">
    <button type="button" class="buttonSignOff"><img class="imgBtnSignOut" src="./img/signout.jpg"></button>
    <button type="button" class="buttonSaved"><img class="imgBtnSaved" src="./img/saved.png"></button>
    <button type="button" class="buttonSignOff"><img class="imgBtnSignOut" src="./img/signout.jpg"></button>
</footer> `;
  container.innerHTML = html;

  const btnSignOff = container.querySelector(".buttonSignOff");
  btnSignOff.addEventListener("click", () => {
    signOutGoogle();
    console.log(signOutGoogle);

  function saved(){
    db.collection("usuarios").addDoc({
      nombre: container.querySelector(".name").value,
      post: container.querySelector(".inputPost").value,
      number: container.querySelector(".number").value, 
    })
    .then((docRef) => {
      alert("registro exitoso")
    })
    .catch((error) => {
      alert("Error en el registro")
    });
  }
  const btnSend = container.querySelector(".buttonPost");
  btnSend.addEventListener("click", () => {
    saved();
  })

  });
  return container;
};


