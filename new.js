const selectedCountry = localStorage.getItem("selected");
const data = JSON.parse(localStorage.getItem("data"));

const countryNames = [];
for (let i = 0; i < data.length; i++) {
    countryNames.push(data[i].name.common)
};

const index = countryNames.indexOf(selectedCountry);

const section = document.querySelector(".section_3")

section.innerHTML = `<div class="container">
<img src="${data[index]["flags"]["png"]}" alt="" class="selected_country">
<div class="info">
    <h3>${data[index]["name"]["common"]}</h3>
    <div class="details">
        <p class="details_par">
            <span class="bold">Native Name: </span>
            <span class="native_val">${Object.values(data[index]["name"]["nativeName"])[0]["official"]}</span>
        </p>
        <p class="details_par">
            <span class="bold">Population: </span>
            <span class="population_val">${data[index].population}</span>
        </p>
        <p class="details_par">
            <span class="bold">Region: </span>
            <span class="region_val">${data[index].region}</span>
        </p>
        <p class="details_par">
            <span class="bold">Sub Region: </span>
            <span class="sub_val">${data[index].subregion}</span>
        </p>
        <p class="details_par">
            <span class="bold">Capital: </span>
            <span class="capital_val">${data[index].capital ? data[index].capital[0] : "NA"}</span>
        </p>
        <p class="details_par">
            <span class="bold">Top Level Domain: </span>
            <span class="domain_val">${data[index].tld}</span>
        </p>
        <p class="details_par">
            <span class="bold">Currency: </span>
            <span class="currency_val">${Object.values(data[index].currencies)[0].name}</span>
        </p>
        <p class="details_par">
            <span class="bold">Languages: </span>
            <span class="languages_val">${Object.values(data[index].languages)[0]}</span>
        </p>
    </div>
</div>

</div>`

const mode = document.querySelector(".mode");
const header = document.querySelector("header");
const mainEl = document.querySelector("main");
const headingTop = document.querySelector("h1");
const pList = document.querySelectorAll("p");
const h3 = document.querySelector("h3")

mode.addEventListener("click", function () {
    if (mode.innerHTML.includes(`Light`)) {
        mode.innerHTML = `🌑 <span class="mode_text">Dark Mode</span>`;
        mode.style.color = "hsl(200, 15%, 8%)";
    } else {
        mode.innerHTML = `☀️ <span class="mode_text">Light Mode</span>`;
        mode.style.color = "hsl(0, 0%, 100%)";
    }
    header.classList.toggle("header_light");
    mainEl.classList.toggle("main_light");
    headingTop.classList.toggle("h1_light");
    h3.classList.toggle("h3_light")

    for (let i = 0; i < pList.length; i++) {
        pList[i].classList.toggle("p_light");
    }
})

const title = document.querySelector("title");
title.textContent = selectedCountry;