document.getElementById('scheduleBtn').addEventListener('click', function() {
    // Show the calendar
    document.getElementById('calendar').style.display = 'block';

    // Get current date and time
    var currentDate = new Date();
    
    // Set the date and time fields
    var dateField = document.getElementById('date');
    var timeField = document.getElementById('time');

    // Format date in YYYY-MM-DD
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;
    dateField.value = formattedDate;

    // Format time in HH:MM
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var formattedTime = hours + ':' + minutes;
    timeField.value = formattedTime;
});
document.getElementById('scheduleBtn').addEventListener('click', function() {
    // Show notification pop-up
    alert("Your meeting is scheduled");
});

