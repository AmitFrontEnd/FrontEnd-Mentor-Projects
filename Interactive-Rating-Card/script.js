// Query the elements
let rating = document.querySelectorAll('.rating span');
let appContainer = document.querySelector('.app-container');
let submitBtn = document.querySelector('.sub-btn');
let allratings = document.querySelectorAll('.rate-num');
let selectedRating = 0; // Variable to store the selected rating

// Add event listener to each rating number
allratings.forEach((rate) => {
    rate.addEventListener('click', () => {
        // Remove 'active' class from all ratings
        allratings.forEach(r => r.classList.remove('active'));
        // Add 'active' class to the clicked rating
        rate.classList.add('active');
        // Store the selected rating
        selectedRating = rate.innerText;
    });
});

// Add event listener to the submit button
submitBtn.addEventListener('click', () => {
    // Clear the current content of app container
    appContainer.innerHTML = '';

    // Create the rating container
    let ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating-container');

    // Create the image element
    let img = document.createElement('img');
    img.src = 'illustration-thank-you.svg';
    img.alt = 'Thank You';

    // Create the rating text paragraph
    let ratingText = document.createElement('p');
    ratingText.classList.add('rating-text');
    ratingText.innerHTML = `You selected <span class="real-rating">${selectedRating}</span> out of 5`;

    // Create the thank you heading
    let thankYouHeading = document.createElement('h2');
    thankYouHeading.textContent = 'Thank you!';

    // Create the content paragraph
    let ratingContent = document.createElement('p');
    ratingContent.classList.add('rating-content');
    ratingContent.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!';

    // Append elements to the rating container
    ratingContainer.appendChild(img);
    ratingContainer.appendChild(ratingText);
    ratingContainer.appendChild(thankYouHeading);
    ratingContainer.appendChild(ratingContent);

    // Append the rating container to the app container
    appContainer.appendChild(ratingContainer);
});
