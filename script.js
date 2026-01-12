fetch ("https://api.dictionaryapi.dev/api/v2/entries/en/<word>")
    .then(response => console.log(response))
    .catch(error => console.log(error))