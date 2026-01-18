// Setup

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let updatedUrl = "";
let meaning = "";

function search () {
    const searchWord = document.getElementById("search-word").value;
    console.log(searchWord);

    updatedUrl = updatedUrl = url + encodeURIComponent(searchWord);
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

        const noun = result[0].meanings[0].partOfSpeech
        const nounMeaning = result[0].meanings[0].definitions[0].definition;
        const verb = result[0].meanings[1].partOfSpeech;
        const verbMeaning = result[0].meanings[1].definitions[0].definition;

        console.log(noun, nounMeaning, verb, verbMeaning);
    }  
    catch (error) {
            console.log(error.message);
        }
};

// function meaning () {
//     meaning = result.meanings;
//     console.log (meaning);
// }

/* 
Errors:

1. Uncaught (in promise) Error: No checkout popup config found.
2. Endpoint returning html instead of json.
*/


// [
//     {
//         "word": "eat",
//         "phonetic": "/iːt/",
//         "phonetics": [
//             {
//                 "text": "/iːt/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/eat-uk.mp3",
//                 "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9027992",
//                 "license": {
//                     "name": "BY 3.0 US",
//                     "url": "https://creativecommons.org/licenses/by/3.0/us"
//                 }
//             },
//             {
//                 "text": "/it/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/eat-us.mp3",
//                 "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=195869",
//                 "license": {
//                     "name": "BY-SA 3.0",
//                     "url": "https://creativecommons.org/licenses/by-sa/3.0"
//                 }
//             }
//         ],
//         "meanings": [
//             {
//                 "partOfSpeech": "noun",
//                 "definitions": [
//                     {
//                         "definition": "Something to be eaten; a meal; a food item.",
//                         "synonyms": [],
//                         "antonyms": []
//                     }
//                 ],
//                 "synonyms": [],
//                 "antonyms": []
//             },
//             {
//                 "partOfSpeech": "verb",
//                 "definitions": [
//     An unordered collection of data in key-value pairs (properties).
//                 {
//                         "definition": "To ingest; to be ingested.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "To use up.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "To cause (someone) to worry.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "What’s eating you?"
//                     },
//                     {
//                         "definition": "To take the loss in a transaction.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "To be injured or killed by (something such as a firearm or its projectile), especially in the mouth.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "To corrode or erode.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "The acid rain ate away the statue.  The strong acid eats through the metal."
//                     },
//                     {
//                         "definition": "To perform oral sex (on a person or body part).",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "Eat me!"
//                     }
//                 ],
//                 "synonyms": [
//                     "bother",
//                     "disturb",
//                     "worry",
//                     "consume",
//                     "swallow",
//                     "breakfast",
//                     "chow down",
//                     "dine",
//                     "dinner",
//                     "feed one's face",
//                     "lunch",
//                     "supper",
//                     "tea"
//                 ],
//                 "antonyms": []
//             }
//         ],
//         "license": {
//             "name": "CC BY-SA 3.0",
//             "url": "https://creativecommons.org/licenses/by-sa/3.0"
//         },
//         "sourceUrls": [
//             "https://en.wiktionary.org/wiki/eat"
//         ]
//     }
// ]