// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                `
 }
 
 function validateInput(testInput) {
    if (testInput.length === 0) {
        return "Empty";
    } else if (Number.isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number"
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = list.querySelector("li[id=pilotStatus]");
    let copilotStatus = list.querySelector("li[id=copilotStatus]");
    let fuelStatus = list.querySelector("li[id=fuelStatus]");
    let cargoStatus = list.querySelector("li[id=cargoStatus]");
    let launchStatus = document.getElementById("launchStatus");
    let issues = 0;
    function emptyFieldAlert() {
        window.alert("All fields are required!");
    }
    function invalidDataAlert() {
        window.alert("Make sure to enter valid information for each field!");
    }
    function notReadyToLaunch () {
        list.style.visibility = "visible";
        launchStatus.style.color =  "red";
        launchStatus.innerHTML ="Shuttle Not Ready for Launch";
    }

    function readyToLaunch() {
        launchStatus.style.color =  "green";
        launchStatus.innerHTML ="Shuttle is Ready for Launch";
    }

    if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty") {
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
    } else {
        emptyFieldAlert();
        return;
    };
    if (validateInput(fuelLevel) === "Is a Number") {
        if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML =`Fuel level too low for launch`
            issues++;
        } else {
            fuelStatus.innerHTML =`Fuel level high enough for launch`
        };
    } else if (validateInput(fuelLevel) === "Not a Number") {
        invalidDataAlert();
    } else {
        emptyFieldAlert();
        return;
    };
    if (validateInput(cargoLevel) === "Is a Number") {
        if (Number(cargoLevel) > 10000) {
            cargoStatus.innerHTML =`Cargo mass too heavy for launch`
            issues++;
        }else {
            cargoStatus.innerHTML =`Cargo mass low enough for launch`
        };
    } else if (validateInput(cargoLevel) === "Not a Number") {
        invalidDataAlert();
    } else {
        emptyFieldAlert();
        return;
    };
    if (issues > 0) {
        notReadyToLaunch();
    } else {
        readyToLaunch();
    }
    
    
 }
 
 async function myFetch() {
     let fetchResult = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     let response = await fetchResult.json();
     return response;
    };
 
 function pickPlanet(planets) {
    let index = Math.floor( Math.random() * planets.length);
    return planets[index];
 };


//export {addDestinationInfo, validateInput,formSubmission,pickPlanet,myFetch}
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;