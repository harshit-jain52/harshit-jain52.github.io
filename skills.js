document.addEventListener("DOMContentLoaded", () => {
  getSkills()
    .then((data) => {
      const box = document.querySelector("#skills .box");
      box.innerHTML = "";
      data.forEach((skill) => {
        let html = `<img class="logo" src=${skill.image} alt=${skill.alt}>`;
        box.innerHTML = box.innerHTML + html;
      });
    })
    .catch((err) => {
      console.log("Rejected:", err.message);
    });
});

async function getSkills() {
  const response = await fetch("./skills.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
}
