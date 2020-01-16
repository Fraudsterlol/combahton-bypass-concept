var request = require("request");
var http = require('follow-redirects').http;

const readline = require('readline');

//For later to take input from user -- Too lazy
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  //Building the request to the website
  request({
    method: "GET",
    uri:  "https://urlofacombahtonsite.tld", //URL to get the cookie for
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36'
      }
      
      // getting the cookie offset if the challenge is enabled
  }, function(error,response, body){
     var code = body;
     var cooieValue = code.split('validate=').pop().split('";document.location')[0]; // For later
     if (code.indexOf("layer7-validate") >= 0) {
     console.log("Cookie offset: " + code.split('validate=').pop().split('";document.location')[0])
     
     // Returns a string if the website does not have the challenge enabled.
     }else{
        console.log("Website does not have challenge enabled")
     }

  })
