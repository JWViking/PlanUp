var dayDisplay = document.getElementById("currentDay");
var hourColumn = document.getElementById("hour-column").innerHTML;
var saveBtn = document.getElementById("saveBtn");

//local storage array
var storage = [];

//Display current date and time
var formatter = Intl.DateTimeFormat("en-US", {month:"long", day:"numeric",year:"numeric", hour:"numeric",minute:"numeric",second:"numeric", timeZoneName:"short"});

var date = new Date();
var todaysDate = formatter.format(date);

var displayDate = dayDisplay.innerHtml

dayDisplay.textContent = "Today is " + todaysDate;

var compareHourFormatter =  Intl.DateTimeFormat("en-US", {hour:"numeric"});
var compareHour = compareHourFormatter.format(date);
console.log(compareHour);


//show time blocks as past, present, or future

var currentTimeDisplay = function (compareHour) {
    let hour = new Date().getHours()
    console.log(hour);

    for (let i=9; i<18; i++) {
        const time = document.getElementById(i.toString());
        const textarea = time.getElementsByTagName('textarea');
        console.log(textarea);

        if(hour === i) {
                   textarea[0].classList.add("present");
                   console.log("present");
                   textarea[0].value = localStorage.getItem(i.toString());
               }
               else if (hour < i) {
                    textarea[0].classList.add("future");
                    console.log("future");
                    textarea[0].value = localStorage.getItem(i.toString());
               }
               else {
                    textarea[0].classList.add("past");
                    console.log("past");
                    textarea[0].value = localStorage.getItem(i.toString());
               }
    }
};

currentTimeDisplay();

//get value of text areas from local storage and display them on the page.
// Storage.getItem(storage);
// console.log(storage);



//If a save button is clicked, the value of the text area is saved to local storage.
var onClick = function (event) {
    //find value of clicked target if the target is a button
    if(event.target.nodeName === 'BUTTON') {
        var buttonId = event.target.id;
        console.log(buttonId);

        //get text value of sibling
        var getButtonSibling = buttonId.previousSibling.innerHTML;
        console.log(getButtonSibling);
        }
    };
      
    //text value of sibling

    // console.log(this);
    //set into local storage (9,10, etc.) Get ID of parent div to use for local storage calls (9,10, etc.)
    // localStorage.setItem(text[i], )



//Event listener for save button clicks
window.addEventListener("click", onClick);