const mode = document.querySelector(".mode");
const header = document.querySelector("header");
const headingTop = document.querySelector("h1");
const mainSection = document.querySelector(".section_2");
const mainEl = document.querySelector("main");
const select = document.querySelector("select");

const searchFunc = document.querySelector(".search_icon");
const input = document.querySelector("input");
const removeFilters = document.querySelector(".remove_filters");

let clickDiv = mainSection.children;


function domChanges(params) {
    for (i = 0; i < params.length; i++) {
        mainSection.innerHTML += `<div class="new_card">
        <img class="flag_img" src="${params[i]["flags"]["png"]}" alt="">
        <h2>${params[i]["name"]["common"]}</h2>
        <p class="general"><span class="bold">Population: </span><span class="pop_value">${params[i]["population"]}</span></p>
        <p class="general"><span class="bold">Region: </span><span class="reg_value">${params[i]["region"]}</span></p>
        <p class="general"><span class="bold">Capital: </span><span class="cap_value">${params[i]["capital"] ? params[i]["capital"][0] : "NA"}</span></p>
    </div>`
    }
}

function details(params) {
    for (let i = 0; i < clickDiv.length; i++) {
        clickDiv[i].addEventListener("click", function () {

            localStorage.setItem("selected", params[i]["name"]["common"]);
            window.open("/details.html")
        });
    }
}

const func = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    localStorage.setItem("data", JSON.stringify(data));

    domChanges(data);
    details(data);

    clickDiv = mainSection.children;

    const namesArray = document.querySelectorAll("h2");

    let selectedValue = select.value;
    let val = input.value.toLowerCase();

    function search() {
        val = input.value.toLowerCase();
        selectedValue = select.value;

        let filteredDivs = data.filter((country) => country["name"]["common"].toLowerCase().includes(val) && country.region.includes(selectedValue))

        mainSection.innerHTML = null;
        domChanges(filteredDivs);

        clickDiv = mainSection.children;
        details(filteredDivs);
    }

    searchFunc.addEventListener("click", function () {
        search();
    })

    input.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            search();
        }
    })

    select.addEventListener("change", function () {
        selectedValue = select.value;
        val = input.value.toLowerCase();

        let filtered = data.filter((country) => country.region.includes(selectedValue) && country["name"]["common"].toLowerCase().includes(val))

        mainSection.innerHTML = null;
        domChanges(filtered);

        clickDiv = mainSection.children;
        details(filtered);
    })

    mode.addEventListener("click", function () {
        if (mode.innerText === "☀️ Light Mode") {
            mode.innerText = "🌑 Dark Mode";
            mode.style.color = "hsl(200, 15%, 8%)";
        } else {
            mode.innerText = "☀️ Light Mode";
            mode.style.color = "hsl(0, 0%, 100%)";
        }
        header.classList.toggle("header_light");
        mainEl.classList.toggle("main_light");
        headingTop.classList.toggle("h1_light");
        const select = document.querySelector("select");
        const input = document.querySelector("input");
        select.classList.toggle("select_light");
        input.classList.toggle("input_light");
        removeFilters.classList.toggle("remove_filters_light")
        const pList = document.querySelectorAll("p");
        const cardList = document.querySelectorAll(".new_card")
        for (let i = 0; i < pList.length; i++) {
            pList[i].classList.toggle("p_light");
        }
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].classList.toggle("new_card_light");
            namesArray[i].classList.toggle("h2_light");
        }
    });

    removeFilters.addEventListener("click", function () {
        mainSection.innerHTML = null;
        input.value = "";
        select.selectedIndex = 0;
        domChanges(data);
    })
}
func();