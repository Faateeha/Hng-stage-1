function showTimeAndDay() {
    const date = new Date();

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getUTCDay()];

    const time = document.getElementById('time');
    if(time){
        time.textContent = `${timeString}`
    }

    const dayOfWeek = document.getElementById('day');
    if(dayOfWeek){
        dayOfWeek.textContent = `${day}`
    } 
}

showTimeAndDay();
setInterval(showTimeAndDay, 1000);

