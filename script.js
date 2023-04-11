const mode = document.querySelector(".mode");
const header = document.querySelector("header");
const headingTop = document.querySelector("h1");
const mainSection = document.querySelector(".section_2");
const mainEl = document.querySelector("main");

const func = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    for (d = 0; d < data.length; d++) {
        const div = document.createElement("div");
        div.classList.add("card")

        const img = document.createElement("img");
        const imgSrc = data[d]["flags"]["png"];
        img.src = imgSrc;

        const headingSec = document.createElement("h2");
        const name = data[d]["name"]["common"];
        headingSec.innerText = name;

        const population = document.createElement("p");
        const boldPop = document.createElement("span");
        boldPop.classList.add("bold_word")
        const valuePop = document.createElement("span");
        boldPop.innerText = "Population: ";
        valuePop.innerText = data[d]["population"];
        population.appendChild(boldPop);
        population.appendChild(valuePop);

        const region = document.createElement("p");
        const boldReg = document.createElement("span");
        boldReg.classList.add("bold_word")
        const valueReg = document.createElement("span");
        boldReg.innerText = "Region: ";
        valueReg.innerText = data[d]["region"];
        region.appendChild(boldReg);
        region.appendChild(valueReg);

        const capitalPar = document.createElement("p");
        const boldCap = document.createElement("span");
        boldCap.classList.add("bold_word")
        const valueCap = document.createElement("span");
        boldCap.innerText = "Capital: ";
        valueCap.innerText = data[d]["capital"] ? data[d].capital[0] : "NA";
        capitalPar.appendChild(boldCap);
        capitalPar.appendChild(valueCap);

        div.appendChild(img);
        div.appendChild(headingSec);
        div.appendChild(population);
        div.appendChild(region);
        div.appendChild(capitalPar);

        mainSection.appendChild(div);
    }