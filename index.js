let startDate = new Date('09/05/2023');
let dateNow = new Date();

let timeDiff = dateNow.getTime() - startDate.getTime();

let dayDiff = Math.round(timeDiff/(1000*3600*24));

document.getElementById('time-since').innerHTML = 'I started coding around '+ startDate.toDateString() + ' and the date you are viewing this is ' + dateNow.toDateString() + ' so I have been learning to code for ' + dayDiff + ' days!';