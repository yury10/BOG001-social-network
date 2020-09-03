const postAdoption = () => {
    const view = `
<header class="main-container">
    <img src="images/logo.png" alt="logo" class="logo-adopt">
    <img src="images/home.png" alt="home-adopt" class="home-adopt">
    <h1> Tell us why motivated you to join our adopt community </h1>
</header>
<main>
    <form class="post_container" id="post-container">
        <input type='text' class="title-post" id="title-post" placeholder="Title...">
        <input type='text' class="new_post" id="new-post" placeholder="What motivated me...">
        <button type='submit' class="publish_button" id="publish-button">Publish</button>
    </form>
    <h2>Welcome to the biggest pet adoption community</h2>
</main>

<div id='containerPost'></div>
`;
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
};

export default postAdoption;
const db = firebase.firestore();
const savePost = (titlePost, textPost) =>
    db.collection('Post').doc().set({
        titlePost,
        textPost

    })

const getPost = () => db.collection('Post').get();



export const postInitial = () => {
    const postContainer = document.querySelector('#post-container')
    postContainer.addEventListener('submit', async (e) => {
        e.preventDefault();

        const titlePost = postContainer['title-post'];
        const textPost = postContainer['new-post'];
        console.log(titlePost, textPost)
        await savePost(titlePost.value, textPost.value);
        postContainer.reset();
        titlePost.focus();

        console.log('Prueba post')

    })

}

const onGetPost = (callback) => db.collection('Post').onSnapshot(callback);
window.addEventListener('DOMContentLoaded', async (e) => {
    onGetPost((querySnapshot) => {
        const post = document.querySelector('#containerPost');
        console.log(post)
        post.innerHTML = "";
        querySnapshot.forEach(doc => {
            console.log(doc.data());

            const post = doc.data();
            containerPost.innerHTML += `
    <div>
        <h3>${post.titlePost}</h3 >
                <p>${post.textPost}</p>
    </div >
    <button id="buttonDelete">Delete</button>
    <button>Edit</button>
    
                `;
        })

    })

})