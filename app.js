function quoteGenerator() {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // let randomNumber = Math.floor(Math.random() * 1643);
            let randomNumber = Math.floor(Math.random() * 69);

            // Vérifier si data[randomNumber] est défini
            if (data[randomNumber]) {
                let quoteText = data[randomNumber].text;
                let quoteAuthor = data[randomNumber].author || "Unknown Author";

                document.getElementById("quote").innerHTML = quoteText;
                document.getElementById("author").innerHTML = quoteAuthor;

                // automatically copies quotes to clipboard
                var text = quoteText;
                navigator.clipboard.writeText(text).then(function () {
                    alert("Copied to clipboard");
                }, function (err) {
                    console.error('Async: Could not copy text: ', err);
                });
            } else {
                console.error('Data at index ' + randomNumber + ' is undefined');
            }
        })
        .catch(function (error) {
            console.error('Error fetching quotes:', error);
        });
}

quoteGenerator();

function changeQuote() {
    quoteGenerator();
}
