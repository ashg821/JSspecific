let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let dateObj = new Date();
    let nowHour = dateObj.getHours();
    let nowMinutes = dateObj.getMinutes();

    let enteredHour = Number(document.getElementById('hours').value);
    let enteredMinutes = Number(document.getElementById('minutes').value);

    let alarmHour = nowHour + enteredHour;
    let alarmMinutes = nowMinutes + enteredMinutes;

    dateObj.setHours(alarmHour);
    dateObj.setMinutes(alarmMinutes);

    let nowTime = document.getElementById('time-1');
    let setTime = document.getElementById('time-2');

    nowTime.innerHTML = `Current Time: ` + new Date();
    setTime.innerHTML = `Alarm Time: ` + dateObj;

    let form = document.getElementById('form');
    form.reset();

    let myInterval = setInterval(timeMatch, 1000, dateObj);

    function timeMatch(dateObj) {
        let nowDate = new Date();
        if (nowDate.getHours() == dateObj.getHours() && nowDate.getMinutes() == dateObj.getMinutes() && nowDate.getSeconds() == dateObj.getSeconds()) {
            let audio = new Audio('alarmSample.mp3');
            audio.play();
            clearInterval(myInterval);
        }
    }
});
