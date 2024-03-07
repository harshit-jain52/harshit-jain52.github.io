document.addEventListener("DOMContentLoaded", () => {
  getProjects()
    .then((data) => {
      const table = document.querySelector("#project-list");
      table.innerHTML = "";
      data.forEach((project) => {
        let html = `<div class = "container">
            <div class="project-icon">
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
            <div class="text-box">
              <div class="text">
                <strong>${project.name}</strong>
                <br/><br/>
                ${project.description}
              </div>
              <a href=${project.url} target="_blank">
                <div class=project-link>
                  ${project.linktext}
                </div>
              </a>
            </div>
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
