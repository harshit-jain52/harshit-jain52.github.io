function getColor(r) {
    if (r < 1200)
        return "gray";
    if (r < 1400)
        return "green";
    if (r < 1600)
        return "cyan";
    if (r < 1900)
        return "#blue";
    if (r < 2200)
        return "violet";
    if (r < 2400)
        return "orange";
    return "red";
}

async function getapi(url) {
    const response = await fetch(url);

    let data = await response.json();

    const ratings = [];
    let max_rating = 0;
    let cur_rating = 0;
    for (let i = 0; i < data.result.length; i++) {
        ratings[i] = data.result[i].newRating;
        if (ratings[i] > max_rating) max_rating = ratings[i];
    }

    if (ratings.length > 0) cur_rating = ratings[ratings.length - 1];

    document.getElementById("cur_rating").innerHTML = cur_rating;
    document.getElementById("cur_rating").style.color = getColor(cur_rating);

    document.getElementById("max_rating").innerHTML = max_rating;
    document.getElementById("max_rating").style.color = getColor(max_rating);
}

let handle = "harshit_jain52";
const api_url = "https://codeforces.com/api/user.rating?handle=" + handle;

getapi(api_url);