const loadTheme = theme => {
    const root = document.querySelector(':root');
    const darkLogos = document.querySelectorAll('.logo-dark');
    const lightLogos = document.querySelectorAll('.logo-light');

    root.setAttribute('color-scheme', `${theme}`);
    localStorage.setItem('hjpf.theme', `${theme}`);

    if (theme == 'dark') {
        darkLogos.forEach(
            logo => {
                logo.style.display = 'flex';
                logo.classList.add('logo');
            }
        );

        lightLogos.forEach(
            logo => {
                logo.style.display = 'none';
                logo.classList.remove('logo');
            }
        );

        document.querySelector('.dark').style.display = 'flex';
        document.querySelector('.light').style.display = 'none';
    }
    else {
        darkLogos.forEach(
            logo => {
                logo.style.display = 'none';
                logo.classList.remove('logo');
            }
        );

        lightLogos.forEach(
            logo => {
                logo.style.display = 'flex';
                logo.classList.add('logo');
            }
        );

        document.querySelector('.dark').style.display = 'none';
        document.querySelector('.light').style.display = 'flex';
    }
}

const getCurrentTheme = () => {
    let theme = (matchMedia("(prefers-color-scheme: dark)").matches) ? 'dark' : 'light';
    let local = localStorage.getItem('hjpf.theme');
    if (local) theme = local;
    return theme;
}

currTheme = getCurrentTheme();
loadTheme(currTheme);

const btn = document.querySelector('#theme');
btn.addEventListener('click', () => {
    let theme = getCurrentTheme();
    if (theme == 'dark') {
        theme = 'light';
        loadTheme(theme);
    }
    else {
        theme = 'dark';
        loadTheme(theme);
    }
});