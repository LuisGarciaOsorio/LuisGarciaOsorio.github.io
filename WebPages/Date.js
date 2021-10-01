//Java script code that takes the current time form the user's computer and gets the month day and year. 1 is added to month to start february at 1. The order is set to customary u.s date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
let date = month + "/" + day + "/" + year
//export default date by saving to localStorage
localStorage["Date"] = date;

//Java script code that takes the current time from the user's computer and gets the hours and minutes. if minutes are less than 10 then a zero is added to the front of the minutes for consistency. PM/AM tags for hours
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
if (minutes < 10) {
    minutes = "0" + minutes
}
let time = hours + ":" + minutes + " "

if (hours > 11) {
    time += "PM"
} else {
    time += "AM"
}

//export default time by saving to localStorage
localStorage["Time"] = time;