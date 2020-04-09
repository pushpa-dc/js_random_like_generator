const love = document.querySelector(".like");
const hate = document.querySelector(".hate");
const button = document.querySelector("button");
const dot = document.querySelector(".dot");

let randomLike = (likeLimit) => {
    return Math.floor(Math.random() * 100) * likeLimit;
};

let randomHate = (hateLimit) => {
    return Math.floor(Math.random() * 10) * hateLimit;
};

var i = 0;
button.addEventListener("click", (e) => {
    love.textContent = randomLike(100);
    hate.textContent = randomHate(10);
    i++;
    if (i % 2 == 0) {
        dot.style = `display:block`;
        i++;
        // console.log(i)
    }
    if (i % 2 !== 0) {
        dot.style = `display:none`;
        console.log(i);
    }
});