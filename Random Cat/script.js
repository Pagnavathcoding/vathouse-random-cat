let image = document.getElementById("image");
let btn = document.getElementById("random-cat");
async function randomCat() {
    let api = 'https://thatcopy.pw/catapi/rest/';
    const res = await fetch(api);
    return res.json().then((data) => {
        image.src = data.url;
        btn.addEventListener("click", (e) => {
            return window.location.reload();
        })
    }).catch((err) => {
        return err;
    })
}
randomCat();