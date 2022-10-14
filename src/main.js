//import { myFunction } from './lib/index.js';
//importamos las vistas login y post
import { routes } from "./lib/router.js";

//creamos una constante que tomara por su id el root que esta en html y lo agregara a html
const rootDiv = document.getElementById("root");

//W.L.P Objeto que nos devuelve la ruta y el nombre de archivo de la página actual.
rootDiv.appendChild(routes[window.location.pathname]); 
console.log(rootDiv);

// Método que nos carga la nueva vista y anexa un registro al historial de navegación.
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.replaceChildren(routes[pathname]);
};

//document.getElementById('root').appendChild(login());
//myFunction();
