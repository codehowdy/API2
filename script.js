// API Key 7fddebc3-b397-473f-ba1c-3762f171fec3
const baseURL = "(https://www.iqair.com/air-pollution-data-api)";

























function fetchResults() {

    let tomato = `${baseURL}`

    fetch(tomato)
    .then(function(tomatoJuice) {
        return tomatoJuice.json();
    })
    .then(function(pizza) {
    console.log(pizza);
    displayResults(pizza);
    });
}

const randoButton = document.querySelector('.getQuality')

randoButton.addEventListener('click', fetchResults);
fetchResults();