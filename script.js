
const scriptHelper = require('./scriptHelper');
//import {addDestinationInfo,validateInput,formSubmission,pickPlanet,myFetch} from "./scriptHelper.js";
//to run locally add type="module" to <script> in index.html
let listedPlanets;

// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    
}).then( function () {
    
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image )

})

window.addEventListener("load", function() {
    const formSubmit = document.getElementById("formSubmit");
    const list = document.getElementById("faultyItems");
    formSubmit.addEventListener("click", () => {
        const pilot = launchForm.querySelector("input[name=pilotName]").value; 
        const copilot =launchForm.querySelector("input[name=copilotName]").value;  
        const fuelLevel =launchForm.querySelector("input[name=fuelLevel]").value; 
        const cargoMass=launchForm.querySelector("input[name=cargoMass]").value;
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);
        event.preventDefault();
    })
})
    


 

 