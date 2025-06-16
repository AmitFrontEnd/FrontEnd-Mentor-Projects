
const body = document.body;
const theme = document.querySelector('.theme')


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode')
    theme.innerHTML = `<p><i class="fa-regular fa-sun"></i> &nbsp; Light Mode </p>`
}
else {
    body.classList.remove('dark-mode')
    theme.innerHTML = `<p><i class="fa-regular fa-moon"></i> &nbsp; Dark Mode </p>`;
}



theme.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    if (body.classList.contains('dark-mode')) {
        theme.innerHTML = `<p><i class="fa-regular fa-sun"></i> &nbsp; Light Mode </p>`
        localStorage.setItem('theme', 'dark')


    }
    else {
        theme.innerHTML = `<p><i class="fa-solid fa-moon"></i> &nbsp; Dark Mode </p>`
        localStorage.setItem('theme', 'light')
    }
}
)