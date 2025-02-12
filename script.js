// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Redirect to the second page after "Yes" button click
        window.location.href = "thank-you.html"; // Redirects to thank-you.html (second page)
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to display the cat.gif initially (for index.html)
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear the container before adding the cat
    var catImage = new Image();
    catImage.src = './images/cat.gif'; // Ensure the path is correct
    catImage.alt = 'Cat';
    catImage.style.width = '200px'; // Adjust size as needed
    imageContainer.appendChild(catImage);
}

// Function to display the cat-heart.gif after clicking "Yes" (for thank-you.html)
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear the container before adding the cat-heart
    var catHeartImage = new Image();
    catHeartImage.src = './images/cat-heart.gif'; // Ensure the path is correct
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.style.width = '200px'; // Adjust size as needed
    imageContainer.appendChild(catHeartImage);
}

// Create hearts floating across the screen (for the second page)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 500ms (for the second page)
setInterval(createHeart, 500);

// Display the cat.gif only on the index.html page
if (window.location.href.includes('index.html') {
    displayCat();
}

// Display the cat-heart.gif only on the thank-you.html page
if (window.location.href.includes('thank-you.html')) {
    displayCatHeart();
}
