// Este es el punto de entrada de tu aplicacions

import router from "./routes/route.js";


window.addEventListener("load", () => {
  router(window.location.hash);
});


window.addEventListener("hashchange", () => {
  router(window.location.hash);
  console.log("Escuchando evento hash");
});







