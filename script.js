// Setup

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let updatedUrl = "";
let meaning = "";


let nounAssign = "";
let nounMeaningAssign = "";
let verbAssign = "";
let verbMeaningAssign = "";

const userDataDiv = document.getElementById("word-card");

function search () {
    const searchWord = document.getElementById("search-word").value;
    console.log(searchWord);

    updatedUrl = url + encodeURIComponent(searchWord);
    console.log (updatedUrl);
    
    getData();
}

//Hitting the endpoint Using async await

async function getData () {       
    try {
        const response = await fetch (updatedUrl, { method: 'GET'})
        console.log (response);

        if (!response.ok) {
            console.log(response);
            throw new Error (`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)

        nounAssign = result[0].meanings[0].partOfSpeech;
        nounMeaningAssign = result[0].meanings[0].definitions[0].definition;
        verbAssign = result[0].meanings[1].partOfSpeech;
        verbMeaningAssign = result[0].meanings[1].definitions[0].definition;

        console.log(nounAssign, nounMeaningAssign, verbAssign, verbMeaningAssign);

        wordMeanings();
    }  
    catch (error) {
            console.log(error.message);
        }
};

function wordMeanings(){
    let htmlContent = 
    `<p>${nounAssign}</p>
    <p>${nounMeaningAssign}</p>
    <p>${verbAssign}</p>
    <p>${verbMeaningAssign}</p>`;

    userDataDiv.innerHTML = htmlContent;
};