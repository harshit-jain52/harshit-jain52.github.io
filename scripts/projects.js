document.addEventListener("DOMContentLoaded", () => {
  getProjects()
    .then((data) => {
      const table = document.querySelector(".timeline");
      table.innerHTML = "";
      data.forEach((project) => {
        let icons = project.stack
          .split(",")
          .map(
            (item) =>
              `<img src="https://skillicons.dev/icons?i=${item}" alt="${item}" />`
          )
          .join("");
          let html = `<div class="container">
          ${project.link ? `
            <a class="circle" href="${project.link}" target="_blank">
              <img class="logo logo-dark" src="${project.image.dark}" alt="${project.alt}" />
              <img class="logo logo-light" src="${project.image.light}" alt="${project.alt}" />
            </a>
          ` : `
            <div class="circle">
              <img class="logo logo-dark" src="${project.image.dark}" alt="${project.alt}" />
              <img class="logo logo-light" src="${project.image.light}" alt="${project.alt}" />
            </div>
          `}
          <div class="textbox ${project.class}">
            <div class="head">
              <h2>${project.name}</h2>
              <div class="stack">
                ${icons}
              </div>
            </div>
            <div class="info">
              <small>${project.time}</small>
              <img class="logo logo-dark" src="${project.typeimg.dark}" />
              <img class="logo logo-light" src="${project.typeimg.light}" />
            </div>
            <p>${project.description}</p>
            <span class="arrow"></span>
          </div>
        </div>`;

        table.innerHTML = table.innerHTML + html;
      });

      loadTheme(getCurrentTheme());
    })
    .catch((err) => {
      console.log("Rejected:", err.message);
    });
});

async function getProjects() {
  const response = await fetch("../data/projects.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
}
