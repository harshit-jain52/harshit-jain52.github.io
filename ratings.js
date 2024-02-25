document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cur_rating").textContent = " Fetching...";
  document.getElementById("max_rating").textContent = " Fetching...";

  let handle = "harshit_jain52";
  const api_url = "https://codeforces.com/api/user.rating?handle=" + handle;

  getapi(api_url)
    .then((data) => {
      let len = data.result.length;

      if (len > 0) {
        let cur_rating = data.result[len - 1].newRating;

        let max_rating = 0;
        for (let i = 0; i < len; i++) {
          if (data.result[i].newRating > max_rating)
            max_rating = data.result[i].newRating;
        }

        const curR = document.getElementById("cur_rating");
        curR.textContent = ` ${cur_rating}`;
        curR.style.color = getColor(cur_rating);

        const maxR = document.getElementById("max_rating");
        maxR.textContent = ` ${max_rating}`;
        maxR.style.color = getColor(max_rating);
      } else {
        document.getElementById("cur_rating").parentElement.style.display =
          "none"; // Unrated
      }
    })
    .catch((err) => {
      console.log("Rejected:", err.message);
    });
});

async function getapi(url) {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
}

function getColor(r) {
  if (r < 1200) return "gray";
  if (r < 1400) return "green";
  if (r < 1600) return "cyan";
  if (r < 1900) return "blue";
  if (r < 2200) return "violet";
  if (r < 2400) return "orange";
  return "red";
}
