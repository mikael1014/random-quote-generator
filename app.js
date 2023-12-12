function quoteGenerator(){
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomNumber = Math.floor(Math.random() * data.length);

            if (data[randomNumber]) {
                document.getElementById("quote").innerHTML = data[randomNumber].text;
                document.getElementById("author").innerHTML = data[randomNumber].author;

                var text = data[randomNumber].text;

                // Vérifier si navigator.clipboard.writeText est disponible
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text).then(function() {
                        alert("Copied to clipboard");
                    }, function(err) {
                        console.error('Async: Could not copy text: ', err);
                    });
                } else {
                    console.warn('Copying to clipboard is not supported in this environment.');
                }
            } else {
                console.error('Quote at index ' + randomNumber + ' is undefined');
            }
        })
        .catch(function(error) {
            console.error('Error fetching quotes:', error);
        });
}

quoteGenerator();

function changeQuote(){
    quoteGenerator();
}
