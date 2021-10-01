//function that loops through the table on the website
//fills array and then saves the JSON data to localStorage
var arr = [];
$("#dataTable").find('tbody tr').each(function (index, item) {

    var day = $(item).find('td').eq(0).text();
    var time = $(item).find('td').eq(1).text();
    var exercise = $(item).find('td').eq(2).text();
    var weight = $(item).find('td').eq(3).text();
    var reps = $(item).find('td').eq(4).text();

    arr.push(new memberInfo(fName, lName, memberId))
});


localStorage.setItem("memberData", arr);
//access the data as so
localStorage["memberData"]