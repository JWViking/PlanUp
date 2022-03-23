var dayDisplay = document.getElementById("currentDay");
var hourColumn = document.getElementById("hour-column").innerHTML;
var saveBtn = document.getElementById("saveBtn");

//local storage array
var schedule = [];

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

//create function to take text typed into textarea and set it as the innerhtml value in the textarea element


//get value of text areas from local storage and display them on the page.
var displayStorage = localStorage.getItem(schedule);
console.log(schedule);



//If a save button is clicked, the value of the text area is saved to local storage.
var onClick = function (event) {
    // prevent window from reloading
    event.preventDefault();
    //find value of clicked target if the target is a button
    if(event.target.nodeName === 'BUTTON') {
        var buttonId = event.target.id;
        console.log(buttonId);

        //get text value of sibling
        var splitButtonId = buttonId.split('-');
        console.log(splitButtonId);

        //concantenate hour + and destructured 2nd value of array
        var [save, num] = splitButtonId;
        console.log(num);
        textareaId = 'hour-' + num;
        console.log(textareaId);

        //get text value of textareaId
        var textareaValue = document.getElementById('textareaId').value; //This isn't working. I don't know why.
        console.log(textareaValue);

        //save text from textarea to local storage
        schedule = JSON.parse(localStorage.getItem('schedule')) || [];
        schedule.push({name: num, text: textareaValue});
        localStorage.setItem('schedule', JSON.stringify(schedule));
        console.log(schedule);
        }
    };

    // console.log(this);
    //set into local storage (9,10, etc.)
    // localStorage.setItem(text[i], )



//Event listener for save button clicks
window.addEventListener("click", onClick);