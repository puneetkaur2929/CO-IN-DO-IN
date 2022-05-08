let currentuser = null;
let signin = document.getElementById('signin');
let signupbtn = document.getElementById('signupbtn');
let signup = document.getElementById('signup');
function getusername() {
    let remember = localStorage.getItem('remember');
    if (remember === 'yes') {
        currentuser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem('user'));
    }
}
function signout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('remember');
    window.location = 'index.html';

}

window.onload = function () {
    getusername();
    if (currentuser === null) {
    }
    else {
        signin.innerText = "Welcome "+ currentuser.registername +' !';
        signin.href="#";
        signup.innerText="";
        signupbtn.innerText="Sign Out";
        signupbtn.addEventListener('click',signout);
        signupbtn.href='javascript.signout()';
    }
    
}
function addneedsonload(needobj){
    needobj.forEach(obj => {
        console.log(obj);
        
        need.textContent = obj.needsposted;
        needs.value = '';
        name.textContent = "- " + obj.ngoname;
        ngo.value = '';
        des.textContent =obj.otherdesc;
        descrip.value = '';
        grid.appendChild(card);
        card.appendChild(image);
        card.appendChild(content);
        content.appendChild(info);
        info.appendChild(need);
        info.appendChild(des);
        info.appendChild(name);
        info.appendChild(btn);
        needBlock.style.display = "none";
    
});
}
let addbtn = document.querySelector('#ngoNeeds');
let needBlock = document.querySelector('#add-modal');
addbtn.addEventListener('click', openAdd);
function openAdd () {
    if(!signedin(currentuser)){
        return ;
    }
    needBlock.style.display = "block";
    document.querySelector('.donate-page').classList.add("backdrop-blur-lg");
}
document.querySelector('#close').addEventListener('click', () => {
    needBlock.style.display = "none";
})

let needs = document.querySelector('#needs');
let ngo = document.querySelector('#ngo');
let descrip = document.querySelector('#des');
let needbtn = document.querySelector('#addneeds');
needbtn.addEventListener('click', addneed);
var needobj=[];
function addneed(e) {
    let yourneed={
        id:Date.now(),
        ngoname:ngo.value,
        needsposted:needs.value,
      otherdesc:descrip.value

        
    }
    needobj.push(yourneed);
    window.localStorage.setItem('needobj',JSON.stringify(needobj));
    console.log(needobj);
    const card = document.createElement('div');
    card.className = 'w-72 max-w-full border border-gray-300 rounded-sm bg-white';

    const content = document.createElement('div');
    content.className = "w-72 max-w-full border border-gray-300 rounded-sm bg-white";

    const image = document.createElement('div');
    image.className = "w-full h-48";
    image.innerHTML = "<img src='./images/image6.png' class='w-full h-full object-cover' />";

    const info = document.createElement('div');
    info.className = "p-6";

    const need = document.createElement('h2');
    need.className = 'text-2xl font-medium fn1';

    const name = document.createElement('h2');
    name.className = 'my-2 text-right text-xl font-semibold fn2';

    const des = document.createElement('p');
    des.className = 'mt-2 fn3';

    const btn = document.createElement('div');
    btn.className = 'mt-4 flex';
    btn.innerHTML = "<a href='alert.html' class='inline-block rounded-sm font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-base py-3 px-6 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600'>Donate</a>";

    const grid = document.querySelector('.needsadded');
    if(needs.value !=='' && ngo.value!==''){
        need.textContent = needs.value;
        needs.value = '';
        name.textContent = "- " + ngo.value;
        ngo.value = '';
        des.textContent = descrip.value;
        descrip.value = '';
        grid.appendChild(card);
        card.appendChild(image);
        card.appendChild(content);
        content.appendChild(info);
        info.appendChild(need);
        info.appendChild(des);
        info.appendChild(name);
        info.appendChild(btn);
        needBlock.style.display = "none";
    }
    
}
function signedin(currentuser){
    if(currentuser===null){
        alert("You need to Register or Sign in first");
        return false;;
    }
    return true;
}