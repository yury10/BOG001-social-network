const initialSession = () => {
  const view = `
<main>
  <header class="header">
    <img src=" ../images/logo.png" alt="logo" class="logo-adopt">
    </header>
    <section class="items-login"> 

      <img src="../images/user.png" alt="user" class="user">
      <img src="../images/password.png" alt="password" class="password"></img>
    </section>
    <form id="formLogin">
      <input type="text" class="user-placeholder" id="loginEmail" placeholder="Email">
      <div class="line-white-login"></div>
      <input type="password" class="password-placeholder" id="loginPassword" placeholder="Password">
      <button type="submit" id="buttonLogin">Login</button>
  <a href="#" class"forgot"> Forgot your password ?</a>
  <a href="#/formRegister" class="register">Register</a>
  <button type="button" id="Gmail">Sign up with google</button>
  <div class="line-white-register"></div>
  </div>
  </form>
  <section>
  <h1>
Welcome to the social 
network that loves dogs 
the most
  </h1>
    <img src="../images/dogs-desktop.png" alt="dogsHome" class="dogsHome">
  </section>

  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export default initialSession;


export const login = () => {
  const loginForm = document.querySelector('#formLogin');
  loginForm.addEventListener('submit', (e) => {
    console.log('intentando enviar')
    e.preventDefault();
    const loginEmail = document.querySelector('#loginEmail').value;
    const loginPassword = document.querySelector('#loginPassword').value;
    console.log(loginEmail, loginPassword)
    //Funcione en el navegador
    auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(userCredential => {
        loginForm.reset();


        console.log('sign In')

      })


  })

};

//GMAIL Login
export const gmail = () => {
  const gmailbutton = document.querySelector('#Gmail')
  gmailbutton.addEventListener('click', e => {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        console.log('google sign in')
      })
      .catch(err => {
        console.log(err)
      })

  })
} 