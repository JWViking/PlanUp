var dayDisplay = document.getElementById("currentDay");
var hourColumn = document.getElementById("hour-column").innerHTML;

//Display current date and time
var formatter = Intl.DateTimeFormat("en-US", {month:"long", day:"numeric",year:"numeric", hour:"numeric",minute:"numeric",second:"numeric", timeZoneName:"short"});

var date = new Date();
var todaysDate = formatter.format(date);

var displayDate = dayDisplay.innerHtml

displayDate = "Today is " + todaysDate;

var compareHourFormatter =  Intl.DateTimeFormat("en-US", {hour:"numeric"});
var compareHour = compareHourFormatter.format(date);
console.log(compareHour);


//show time blocks as past, present, or future

var currentTimeDisplay = function (compareHour) {
    
       if(hourColumn === compareHour) {
           element.classList.add("present");
           console.log("present");
       }
       else if (hourColumn > compareHour) {
           element.classList.add("future");
           console.log("future");
       }
       else {
           element.classList.add("past");
           console.log("past");
       }
};

currentTimeDisplay();

