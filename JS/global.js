//Avatar de perfil que se muestra en el header de la página

let avatarI = document.getElementById('avatarProfile');
let avatar = getAvatar(); 
avatar.then(data => {
    let imgAvatar = document.createElement('img');
    imgAvatar.setAttribute('src', data.message);
    imgAvatar.style.width= '50px';
    imgAvatar.style.height= '50px';
    imgAvatar.style.borderRadius= "50%";
    
    avatarI.appendChild(imgAvatar);
    console.log(data);

}).catch(err => {
    console.log('fetch failed', err);
})

async function getAvatar(){
    let url = "https://dog.ceo/api/breeds/image/random"
    const res = await fetch(url);
    const data = await res.json();
    return data

}