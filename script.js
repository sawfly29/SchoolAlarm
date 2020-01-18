let date = new Date();

let dayOfWeek = date.getDay();

if (dayOfWeek == 6 || dayOfWeek == 0){
    alert ("Дорогой, иди домой, ведь сегодня выходной!");
}
else {
    let start= new Audio('start.mp3');
    let finish = new Audio ('finish.mp3');
    let currentHours =date.getHours();
    let currentMinutes=date.getMinutes()/100;
    let time = currentHours+currentMinutes;
    let s1=8.30;
    let f1=9.15;
    let s2=9.35;
    let f2=10.20;
    let s3=10.40;
    let f3=11.25;
    let s4=11.35;
    let f4=12.20;
    let s5=12.35;
    let f5=13.20;
    let s6=13.35;
    let f6=14.20;
    let s7=14.30;
    let f7=15.15;
    let s8=15.25;
    let f8=16.10;
    if (s1 == time || s2 == time || s3 == time || s4 == time || s5 == time || s6 == time || s7 == time || s8 == time) {start.play();}
    if (f1 == time || f2 == time || f3 == time || f4 == time || f5 == time || f6 == time || f7 == time || f8 == time) {finish.play();}
}



/*
|| s3 == time || s4 == time || s5 == time || s6 == time || s7 == time
|| f3 == time || f4 == time || f5 == time || f6 == time || f7 == time
*/
