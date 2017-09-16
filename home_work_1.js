//1.нарисовать елку


let i = 0;
let h = 0;
let holes = '     ';
let star = '*';

const LINES = 5;
const SUM = '**';

console.log(holes + star);

while (i < LINES) {
    h++;
    star += SUM;
    console.log((holes.substring(h))+star)
    i++;
}





