let submit = document.getElementById('submit');

submit.addEventListener('click', alarm);

function alarm(e) {
    e.preventDefault();
    let hourInput = Number(document.getElementById('hours').value);
    let minuteInput = Number(document.getElementById('minutes').value);

    let alarmObj = new Date();
    let nowObj = new Date();
    alarmObj.setHours(nowObj.getHours() + hourInput);
    alarmObj.setMinutes(nowObj.getMinutes() + minuteInput);

    let form = document.getElementById('form');
    form.reset();
    let setTime = document.getElementById('time-1');
    setTime.innerHTML = `Alarm Time: ` + alarmObj;
    let alarmTime = alarmObj - nowObj;
    if (alarmTime > 0) {
        setTimeout(() => {
            let audio = new Audio('alarmSample.mp3');
            audio.play();
        }, alarmTime);
    }
}