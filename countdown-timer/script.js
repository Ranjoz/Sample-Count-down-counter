const daysEL  = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

//set your trget birthday here/ or whatever date you wish
const newYearsBirthday = '21 Mar 2022';

function countdown(){
const newYearsDate = new Date (newYearsBirthday);
const currentDate = new Date();

const totalSeconds = Math.floor((newYearsDate-currentDate) / 1000);

const days =Math.floor(totalSeconds / 3600 / 24 );

const hours = Math.floor((totalSeconds /3600) % 24 );
const minutes = Math.floor((totalSeconds / 60) % 60);
const seconds = Math.floor((totalSeconds ) % 60);

//console.log(days,hours,minutes,seconds)

daysEL.innerHTML =days;
hoursEL.innerHTML =formartTime(hours);
minsEL.innerHTML =formartTime(minutes);
secondsEL.innerHTML=formartTime (seconds);


}


function formartTime(time){

    return time < 10 ? (`0${time}`) : time;
}


//initial call
countdown()

setInterval(countdown,1000)

