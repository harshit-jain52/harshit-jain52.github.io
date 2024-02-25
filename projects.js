document.addEventListener("DOMContentLoaded", () => {
  getProjects()
    .then((data) => {
      const table = document.querySelector("#project-list");
      console.log(table);
      table.innerHTML = "";
      data.forEach((project) => {
        let html = `<tr>
        <td>
          <a href=${project.url} target="_blank">
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
          </a>
        </td>
        <td>
          <strong>${project.name}</strong>
          <br />
          ${project.description}
        </td>
      </tr>`;

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
