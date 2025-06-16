const nativeName = document.querySelector(".native-name span");
const population = document.querySelector(".population span");
const region = document.querySelector(".region span");
const subRegion = document.querySelector(".sub-region span");
const capital = document.querySelector(".capital span");
const topLevelDomain = document.querySelector(".top-level-domain span");
const currencies = document.querySelector(".currencies span");
const languages = document.querySelector(".languages span");
const flag=document.querySelector('.flag-container img')
const title=document.querySelector('.title')
const borderContainer=document.querySelector('.border-container')
const flagContainer=document.querySelector('.flag-container')

const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>res.json()).
then(([data])=>{
    flag.src = data.flags?.svg || "N/A";
    title.textContent = data.name?.common || "N/A";
    document.title = `${data.name?.common} - Country Details`;

    nativeName.textContent = data.name?.nativeName ? Object.values(data.name.nativeName)[0]?.common || "N/A" : "N/A";
    population.textContent = data.population ? data.population.toLocaleString('en-IN') : "N/A";
    region.textContent = data.region || "N/A";
    subRegion.textContent = data.subregion || "N/A";
    capital.textContent = data.capital ? data.capital.join(', ') : "N/A";
    topLevelDomain.textContent = data.tld ? data.tld.join(', ') : "N/A";
    currencies.textContent = data.currencies ? Object.values(data.currencies)[0]?.name || "N/A" : "N/A";
    languages.textContent = data.languages ? Object.values(data.languages).join(', ') : "N/A";
    if (data.borders) {
        console.log("Borders:", data.borders);
        data.borders.forEach((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then(res => res.json())
            .then(([borderData]) => {
                if (borderData && borderData.name && borderData.name.common) {
                    const borderCountry = document.createElement('a');
                    borderCountry.href = `/country.html?name=${encodeURIComponent(borderData.name.common)}`;
                    borderCountry.textContent = borderData.name.common;
                    borderContainer.appendChild(borderCountry);
                }
            })
            .catch(error => console.error("Error fetching border country:", error));
        });
    } else {
        borderContainer.textContent = "No border countries available";
    }
    

   
})
flag.onload = () => {
    flag.classList.add('loaded');
    flagContainer.classList.add('remove')
};