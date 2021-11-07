const axios= require("axios"); // We need Axios to be able to make HTTP(s) Requests
const sodium = require('libsodium-wrappers');

let data= {};
const url = "https://79vo67ipp9.execute-api.eu-west-1.amazonaws.com/Prod/decrypt/challenges";

// POST Request to REST_API > response contains our data
async function post(){ // Data contains: kid, key, challenge, and nonce
try
{ // This may cause an error, so we need to surround it with a try-catch !
    let post_request = await axios.post(url); // Using Axios to make our POST request
    data = post_request.data
}catch(error){
    console.log(error);
}
// Print received data 
console.log(data);
}

async function decryptData()
{
    // Post Request to get our data    
    await post()
    // Define our data: kid, key, challenge, and nonce
    let kid = data.kid;
    let key = data.key;
    let challenge = data.challenge;
    let nonce = data.nonce;

    // Libsodium decryption
    // Using crypto_scretbox_open_easy() and decode from_base64 

    try
    {
    // This may cause an error, so we need to surround it with a try-catch !
        
        let plaintext = sodium.crypto_secretbox_open_easy(
            // Expect a ciphertext (our challenge), nonce, and a key
            // Our data is base64 encoded! We need to decode it to pass it to our sodium function!
            // from_base64 expect a String and a variant, variant should be Original!
            sodium.from_base64(challenge, sodium.base64_variants.ORIGINAL),
            sodium.from_base64(nonce, sodium.base64_variants.ORIGINAL),
            sodium.from_base64(key, sodium.base64_variants.ORIGINAL),
            // Uint8Array
            "uint8array"
        );

        // We need to encode our plaintext to base64 before sending request!
        base64_plaintext = sodium.to_base64(plaintext,sodium.base64_variants.ORIGINAL)// Using base64 Original variant

        // Objective: DELETE our created challenge
        // We need to pass our base64_plaintext as data using plaintext as keyword
        _data = {
            "plaintext": `${base64_plaintext}`
        }
        let _delete = await axios.delete(`${url}/${kid}`,{data: _data});
       
        
        console.log(`Succesfully deleted: challenge with kid=${kid} \n Status: ${_delete.status}`);


    }catch(error){
        console.log(error);
    }

}


// Run decryption function
decryptData();





