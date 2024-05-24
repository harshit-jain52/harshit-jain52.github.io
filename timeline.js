document.addEventListener("DOMContentLoaded", () => {
  getProjects()
    .then((data) => {
      const table = document.querySelector(".timeline");
      table.innerHTML = "";
      data.forEach((project) => {
        let html = `<div class="container">
        <div class="circle">
            <img
                class="logo logo-dark"
                src=${project.image.dark}
                alt=${project.alt}
            />
            <img
                class="logo logo-light"
                src=${project.image.light}
                alt=${project.alt}
            />
        </div>
        <div class="textbox">
            <h2>${project.name}</h2>
            <small>${project.time}</small>
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
  const response = await fetch("./projects.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
}
