//In about section
let startDate = new Date('09/05/2023');
let dateNow = new Date();

let timeDiff = dateNow.getTime() - startDate.getTime();

let dayDiff = Math.round(timeDiff/(1000*3600*24));

document.getElementById('time-since').innerHTML = 'I started coding around '+ startDate.toDateString() + ' and the date you are viewing this is ' + dateNow.toDateString() + ' so I have been learning to code for ' + dayDiff + ' days!';

//menu-icon

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active')
}