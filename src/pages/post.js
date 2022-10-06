import { signOutGoogle, getPost, addPost } from "../firebase.js";

export const post = () => {
  const container = document.createElement("div");
  const html = `
  <div class= "postView" >
  <div class="headerPost">
    <div class="containerLogoPost">
      <img class="logo" src="./img/logo-sin-fondo.png" alt="logo"/>
      <h1 class="h1Post">TRUELACHE</h1> 
      <div class ="btnMenuHeader">
    <button type="button" class="buttonHome"><img class="imgBtnHome" src="./img/home.png"></button>
    <button type="button" class="buttonSaved"><img class="imgBtnSaved" src="./img/saved.png"></button>
    <button type="button" class="buttonSignOff1"><img class="imgBtnSignOut" src="./img/signout.png"></button>
    </div>
    </div>
  </div>
  <div class = "containerPost">
 <div class = "post"> 
  <input type="text" id="name" class="name" placeholder="Ingresa tu nombre"></input>
    <textarea class="inputPost" id="inputPost" rows="4" cols="30" placeholder = "Escribe aquí tu..."></textarea>
     
    <input type="tel" id="number" class="number" placeholder="+56 9 xxxx xxxx" minlength="9" maxlength="12"></input>
      <div class = "btnSend">
      <button type="button" class="buttonPost"><img class="imgBtnPost" src="./img/send.png"></button>
     </div>
</div> 
<div id ="printPost" class= "printPost">
</div>
</div>
</div>
<div class ="containerFooter">
<div class ="btnMenu">
    <button type="button" class="buttonHome"><img class="imgBtnHome" src="./img/home.png"></button>
    <button type="button" class="buttonSaved"><img class="imgBtnSaved" src="./img/saved.png"></button>
    <button type="button" class="buttonSignOff"><img class="imgBtnSignOut" src="./img/signout.png"></button>
</div>
<footer>
 <p> © Copyreit 2022</p>
<a href="https://github.com/AshleyBustosE">Ashley Bustos</a>
<a href="https://github.com/PaulaAmigo">Paula Amigo</a>
<a href="https://github.com/DanielaRamirezCanquiz">Daniela Ramírez</a>
</footer>
</div> `;
  container.innerHTML = html;

  const btnSignOff1 = container.querySelector(".buttonSignOff1");
  btnSignOff1.addEventListener("click", () => {
    signOutGoogle();
    console.log("aqui estoy soy el boton");
  });
  const btnSignOff = container.querySelector(".buttonSignOff");
  btnSignOff.addEventListener("click", () => {
    signOutGoogle();
    console.log("aqui estoy soy el boton dos");
  });

  const btnSend = container.querySelector(".buttonPost");
  const printPost = container.querySelector("#printPost");
  const drawPost = (post) => {
    const postHtml = `
     <div class ="infoPost">
        <div class="namePost">
          <p>${post.name}</p> 
        </div>
        <div class="textPost">
          <p>${post.title}</p>
          <p>${post.number}</p>
        </div>
     </div>
     `;
    const postDiv = document.createElement("div");
    postDiv.className = "divPost";
    postDiv.innerHTML = postHtml;
    printPost.appendChild(postDiv);
    console.log("Yo estoy dentro de drawPost", post);
  };
  btnSend.addEventListener("click", () => {
    container.querySelector("#printPost").innerHTML = "";
    //container.querySelector(".name").innerHTML = "";
    getPost(drawPost);
    addPost();
    console.log("hola debería funcionar");
  });
  getPost(drawPost);
  return container;
};

/*export const getPostsHtml = (posts) => {
  const postHtml = posts
}*/
