//while_1
/*
var count = 0;
while(count<10){
    console.log(count);
    count++;
}*/

// for_1

/*
for( let i =0; i<5; i++){
    console.log(i);
}
*/

// for_2

/*
let i =0;

for( ;i<5; ){
    console.log(i);
    i++;
}
*/

//for_3

/*for (let i = 0; i<10; i++){
    if(i%2==0 && i!=0)
        console.log(i + ' is even number');
    else if(i==0)
        console.log(i + ' is zero');
    else
        console.log(i+' is odd number');
}*/

//for_4

/*for(let i=0; i<10; i++) {
    if(i==0)
        console.log(i + ' is zero');
    else if(i%2 == 0)
        console.log(i + ' is even number');
    else
        console.log(i + ' is odd number');
}*/

//for_5
/*
for (var i = 0, x, y=0;i<10;i++,y--){
    console.log(i,y);
}*/

//for_6
/*
for (var i = 0; i < 10; i++) {
    var x = 100;
}
console.log(i, x);*/

//for_7

/*
for (let i = 0; i < 10; i++) {
    let x = 100;
}

console.log(i, x);
*/

//if

/*let a = 3;
let b = 4;
let c;

c = (a < b) ? 'a less then b' : 'a more than b';
if (a < b)
    c = 'a less then b';
else
    c = 'a more than b';

console.log(c);*/

// do_1
/*let i = 0
do{
   console.log(i);
   i++;
} while (i<10);*/

//lab_2_3

/*
let age = -5;

if (age > 17 && age < 60) {
    console.log('Work!')
}
else if (age >= 60) {
    console.log('Go to rest!')
}
else if (age > 0 && age <= 17) {
    console.log('Lern!')
}
else {
    console.log('Unknown age')
}
*/

//continue
/*
var count = 0;
while (count < 5) {
    count++;
    if (count == 3)
        continue;
    console.log(count);
}*/

//break

/*
var count = 0;
while (count < 5) {
    if (count == 3)
        break;
    console.log(count++);
}
*/

//
/*
let x = 5;
let y = 45;

var z = x > y ? 'x lager y' : 'x less y';
console.log(z);
*/

//switch
/*var x = 5, y;
switch (x) {
    case 1:
        y = 'товар';
        break;
    case 2:
    case 3:
    case 4:
        y = 'товара';
    default:
        y = 'товаров';
}
console.log(`${x} ${y}`);*/

//switch_2

/*
var x = 3, y;
switch (x) {
    case '3':
        console.log('Ura');
}*/
//switch_3
/*
let num = 20;

switch (num) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    default:
        console.log('much');
}*/
