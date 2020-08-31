
import initialSession from '../views/initialSession.js';
import postAdoption from '../views/post-adoption.js';
import adopt from "../views/adopt.js";
import error404 from "../views/error404.js";
import { añadirEventos } from "../views/form-register.js"
import register from "../views/form-register.js"

const router = async (route) => {
    const content = document.getElementById('root');
    content.innerHTML = '';
    let pedazoDelDom = '';
    /* content.appendChild(initialSession()); */
    switch (route) {
        //RUTA LOGIN USER REGISTER
        case '#/':
            pedazoDelDom = initialSession();
            break;
        case '#/postAdoption':
            pedazoDelDom = postAdoption();
            break;
        //RUTA USER NOT REGISTER
        case '#/formRegister':
            pedazoDelDom = await register();
            await content.appendChild(pedazoDelDom)
            await añadirEventos()
            break;
        case '#/adopt':
            pedazoDelDom = adopt();
            break;

        default:
            pedazoDelDom = initialSession();


    }
    content.appendChild(pedazoDelDom);



};


export default router;
