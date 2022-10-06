//import { myFunction } from './lib/index.js';
//importamos las vistas login y post
import { routes } from "./lib/router.js";

//creamos una constante que tomara por su id el root que esta en html y lo agregara a html
const rootDiv = document.getElementById("root");

rootDiv.appendChild(routes[window.location.pathname]);
console.log(rootDiv);

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.replaceChildren(routes[pathname]);
};

//document.getElementById('root').appendChild(login());
//myFunction();
