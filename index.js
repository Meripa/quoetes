// URL of the API
const apiUrl = 'https://type.fit/api/quotes?ref=hackernoon.com';

// Function to fetch quotes from the API
async function fetchQuotes() {
    try {
        // Make the request to the API
        let response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        let quotes = await response.json();
        return quotes;
    } catch (error) {
        // Handle any errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to get a random quote
function getRandomQuote(quotes) {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Event listener for the button
document.querySelector('.btn').addEventListener('click', async () => {
    let quotes = await fetchQuotes();
    if (quotes) {
        let randomQuote = getRandomQuote(quotes);
        document.querySelector('.quote').textContent = randomQuote.text;
        document.querySelector('.author').textContent = randomQuote.author || 'Unknown';
    }
});
