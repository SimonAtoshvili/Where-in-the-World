const mode = document.querySelector(".mode");
const header = document.querySelector("header");
const headingTop = document.querySelector("h1");
const mainSection = document.querySelector(".section_2");
const mainEl = document.querySelector("main");
const card = document.querySelector(".card")

const func = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    for (i = 0; i < data.length; i++) {
        const newCard = document.createElement("div");
        newCard.classList.add("new_card");
        newCard.innerHTML = card.innerHTML;

        mainSection.appendChild(newCard);


        const flagsList = document.querySelectorAll("img");
        const flag = flagsList[flagsList.length - 1];
        flag.src = data[i]["flags"]["png"];

        const namesList = document.querySelectorAll("h2");
        const countryName = namesList[namesList.length - 1];
        countryName.innerText = data[i]["name"]["common"];

        const popList = document.querySelectorAll(".pop_value");
        const pop = popList[popList.length - 1];
        pop.innerText = data[i]["population"];

        const regList = document.querySelectorAll(".reg_value");
        const reg = regList[regList.length - 1];
        reg.innerText = data[i]["region"];

        const capList = document.querySelectorAll(".cap_value");
        const cap = capList[capList.length - 1];
        cap.innerText = data[i]["capital"] ? data[i]["capital"][0] : "NA";
    }

    mode.addEventListener("click", function () {
        if(mode.innerText === "☀️ Light Mode"){
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
        const cardsList = document.querySelectorAll(".new_card");
        const pList = document.querySelectorAll("p");
        const nameList = document.querySelectorAll("h2");
        for (let i = 0; i < pList.length; i++) {
            pList[i].classList.toggle("p_light");
        }
        for (let i = 0; i < cardsList.length; i++) {
            cardsList[i].classList.toggle("new_card_light");
            nameList[i+1].classList.toggle("h2_light");
        }
    });
}

func();
