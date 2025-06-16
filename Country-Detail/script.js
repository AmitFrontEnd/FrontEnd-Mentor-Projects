
const filterContainer = document.querySelector('.filter-container')
const filterContainerInput = document.querySelector('.filter-container input')
const searchContainerInput = document.querySelector('.search-container input')
const optionContainer = document.querySelector('.option')
const cardFlag = document.querySelector('.card .flag');
const cardContainer = document.querySelector('.card-container')
let timer;


filterContainer.addEventListener('click', (evt) => {
    optionContainer.classList.toggle('active');
    evt.stopPropagation()

});


optionContainer.addEventListener('click', (evt) => {
    evt.stopPropagation();
});

document.addEventListener('click', () => {
    optionContainer.classList.remove('active');
});

function renderCountries(url) {
    cardContainer.innerHTML = ''
    fetch(url).
        then((data) => {

            if (!data.ok) throw new Error("Failed to fetch data");
            return data.json()
        })
        .then((data) => {
            data.forEach(country => {
                const name = country.name.common;
                const flag = country.flags.svg;
                const population = country.population.toLocaleString('en-IN');
                const region = country.region;
                const capital = country.capital ? country.capital[0] : "N/A";

                const card = document.createElement('a')
                card.href = `/country.html?name=${country.name.common}`
                card.classList.add('card')
                card.innerHTML = `
                    <div class="flag">
                        <img src=${flag} alt="Flag of ${name}">
                        <div class="card-content">
                            <h3 class="title">${name}</h3>
                            <p class="population"><b>Population:</b> <span>${population}</span></p>
                            <p class="region"><b>Region:</b> <span>${region}</span></p>
                            <p class="capital"><b>Capital:</b> <span>${capital}</span></p>
                        </div>
                    </div>
                `;
                cardContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching country data:", error);
            cardContainer.innerHTML = `<p class="error-message">Failed to load data. Please try again later.</p>`;
        });

}

renderCountries('https://restcountries.com/v3.1/all')

searchContainerInput.addEventListener('input', (e) => {
 
    cardContainer.style.minHeight = 'auto';
    clearTimeout(timer)
    timer = setTimeout(() => {
        const filterCountry = e.target.value.trim().toLowerCase();

        if (filterCountry) {
            renderCountries(`https://restcountries.com/v3.1/name/${filterCountry}`);
        } else {
            renderCountries('https://restcountries.com/v3.1/all');
        }
    }, 1000);

})

optionContainer.addEventListener('click', (e) => {
    searchContainerInput.value=''
    if (e.target.tagName === 'DIV') {
        filterContainerInput.value = e.target.textContent
        let filterByRegion = e.target.textContent.toLowerCase();
        renderCountries(`https://restcountries.com/v3.1/region/${filterByRegion}`)
        optionContainer.classList.remove('active')
    }
});

searchContainerInput.addEventListener('focus',()=>{
    if (filterContainerInput.value !== '') { 
        filterContainerInput.value = ''; 
        renderCountries('https://restcountries.com/v3.1/all');
    }
})