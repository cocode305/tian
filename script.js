let darkmode = localStorage.getItem('darkmode');
const toggle = document.getElementById('toggle');
const body = document.body;

const enableDarkmode = () => {
    body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'null');
}

if(darkmode === "active") enableDarkmode();

toggle.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})



// toggle.addEventListener('change', () => {
//   body.classList.toggle('dark');
// });