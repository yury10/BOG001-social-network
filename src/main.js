// Este es el punto de entrada de tu aplicacion

import initialSession from '../views/initialSession.js';
import router from "./routes/route.js"
import { login } from "./views/initialSession.js"
import { gmail } from "./views/initialSession.js"
import { añadirEventos } from './views/form-register.js';

window.addEventListener('load', () => {
  router(window.location.hash);

  switch (router) {
    case '#/':
      login();
      gmail();
      break;
    default:
      login();
      gmail();

  }


})

window.addEventListener('hashchange', () => {
  router(window.location.hash);
  console.log("Escuchando evento hash");

});



