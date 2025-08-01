let darkmode = localStorage.getItem('darkmode');
const toggle = document.getElementById('toggle');
const body = document.body;
const menuList = document.getElementById('menuList');
const menuBtn = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.closeBtn')

const enableDarkmode = () => {
    body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
}

if(darkmode === "active") enableDarkmode();

if (toggle) {
    toggle.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
}

menuBtn.addEventListener('click', () => {
    menuList.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    menuList.style.display = "none";
});
