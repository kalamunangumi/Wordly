// Setup

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let updatedUrl = "";

function search () {
    let searchWord = document.getElementById("search-word").value;
    let updatedUrl = url.concat(searchWord);
    console.log (updatedUrl);
    
    getData();
}


//Hitting the endpoint Using async await

function getData () {       
    try {
        let response = fetch (updatedUrl)
        console.log (response);

        if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
        let result = response.json()
        console.log(result)
    } catch (error) {
            console.log(error.message);
        }
};


