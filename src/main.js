// Este es el punto de entrada de tu aplicacions
/* import { login } from "./views/initialSession.js"
import { gmail } from "./views/initialSession.js" */
import router from "./routes/route.js";

window.addEventListener("load", () => {
  router(window.location.hash);

});


window.addEventListener("hashchange", () => {
  router(window.location.hash);
  console.log("Escuchando evento hash");
});







