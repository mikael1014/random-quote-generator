function quoteGenerator(){
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //	console.log(data);

            let randomNumber = Math.floor(Math.random()*1643);

            document.getElementById("quote").innerHTML = data[randomNumber].text;
            document.getElementById("author").innerHTML = data[randomNumber].author;

            //automatically copies quotes to clipboard
            var text = document.getElementById("quote").innerHTML = data[randomNumber].text;
            navigator.clipboard.writeText(text).then(function() {
                alert("Copied to clipboard");
                //console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
            });

        });
}

quoteGenerator();

function changeQuote(){
    quoteGenerator();
}
