// Get the current year 
const currentYear = document.querySelector("#currentyear") ;
currentYear.innerHTML = new Date().getFullYear();
// Get the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = 'Last Modification: ' + document.lastModified;
