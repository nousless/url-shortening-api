
const linkInput = document.getElementById("linkInput")
const shortenButton = document.getElementById("shortenButton")
const spinner = document.getElementById("spinner");

const requestURI = 'https://api.shrtco.de/v2/shorten?url='

fetchURL = () => {
    spinner.removeAttribute('hidden');
    fetch(`${requestURI}${linkInput.value}`,
        {
            "Content-Type": "application/json",
            "Connection": "keep-alive",
        }
    )
        .then(response => response.json())
        .then(data => {
            linkInput.value = data.result.short_link
            spinner.setAttribute('hidden', '');
        }) 
        .catch(err => {
            console.log(`the errors ${err}`);
        });
}

linkInput.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {
        shortenButton.click();
    }
});