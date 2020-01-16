# combahton-bypass-concept
Combahton JS Bypass

Nodejs application that detects if Combahtons Layer 7 filter is currently enabled for a site or not. If it is, the application will get the cookie used for validating the visitors request and store it into a variable that can be later used to force cookies. This method could be abused to create a DDoS script that is capable of reaching the backend server of a site hidden behind Combahtons reverse proxy. 

Please do not complain about the code since I made it in less than 10 minutes.
