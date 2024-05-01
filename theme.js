const loadTheme = (theme) => {
  const root = document.querySelector(":root");
  const darkLogos = document.querySelectorAll(".logo-dark");
  const lightLogos = document.querySelectorAll(".logo-light");
  const langsCard = document.querySelector(".langs-card");

  root.setAttribute("color-scheme", `${theme}`);
  localStorage.setItem("hjpf.theme", `${theme}`);

  if (theme == "dark") {
    if (langsCard) {
      langsCard.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=harshit-jain52&hide_progress=true&hide=cmake&langs_count=10&theme=algolia";
    }

    darkLogos.forEach((logo) => {
      logo.style.display = "flex";
    });

    lightLogos.forEach((logo) => {
      logo.style.display = "none";
    });

    document.querySelector(".dark").style.display = "flex";
    document.querySelector(".light").style.display = "none";
  } else {
    if (langsCard) {
      langsCard.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=harshit-jain52&hide_progress=true&hide=cmake&langs_count=10&theme=buefy";
    }

    darkLogos.forEach((logo) => {
      logo.style.display = "none";
    });

    lightLogos.forEach((logo) => {
      logo.style.display = "flex";
    });

    document.querySelector(".dark").style.display = "none";
    document.querySelector(".light").style.display = "flex";
  }
};

const getCurrentTheme = () => {
  let theme = matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  let local = localStorage.getItem("hjpf.theme");
  if (local) theme = local;
  return theme;
};

currTheme = getCurrentTheme();
loadTheme(currTheme);

const btn = document.querySelector("#theme");
btn.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme == "dark") {
    theme = "light";
    loadTheme(theme);
  } else {
    theme = "dark";
    loadTheme(theme);
  }
});
