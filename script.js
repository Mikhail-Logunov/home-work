const main = document.querySelector("main");
const infoBlock = document.querySelector(".info-block");
const setRate = function(n) {
    let fill = "<img src='img/cat-fill.svg' alt='^_^'>"
    let stroke = "<img src='img/cat-stroke.svg' alt='O_o'>"
    let rate = "", cnt = 10;
    for (let i = 0; i < cnt; i++) {
        rate += i < n ? fill : stroke;
    }
    return rate;
}

const getWord = function (n, w1, w2, w0) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2;
        } else {
            return w0;
        }
    } else {
        return w0;
    }
}

const showInfo = function (data) {
    infoBlock.classList.add("active");
    infoBlock.firstElementChild.innerHTML = `
        <img class="info-img" src="${data.img_link}" alt="${data.name}">
        <div class="information">
            <h2>${data.name}</h2>
            <h3>${data.age} ${getWord(data.age, "год", "года", "лет")}</h3>
            <p>${data.description}</p>
        </div>
        <div class="info-close" onclick="closeInfo()"></div>
    `;
}

const closeInfo = function () {
    infoBlock.classList.remove("active");
}

const getItem = function (data) {
    const item = `
        <div class="card">
            <div class="card-img" style="background-image: url(${data.img_link})"></div>
            <h3>${data.name}</h3>
            <p class="rate">${setRate(data.rate)}</p>
        </div>
    `
    main.innerHTML += item;
}

cats.forEach(cat => {
    getItem(cat);
});

const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(e) {
        showInfo(cats[i]);
    })
}