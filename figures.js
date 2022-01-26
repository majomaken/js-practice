//Square code
console.group('Square Log');
const sideSquare = 5;
console.log("The sides of square size: " + sideSquare + "cm");

const perimeterSquare = sideSquare * 4;

console.log("The perimeter of square size: " + perimeterSquare + "cm");

const areaSquare = sideSquare * sideSquare;

console.log("The area of square size: " + areaSquare + "cm2");
console.groupEnd();
//Triangle code 
console.group('Triagle Log');
const triangleSide = 6;

const triangleSide2 = 6;

const baseTriangle = 4;

console.log(
    "The sides of triangle size: "
    + triangleSide + "cm "
    + triangleSide2 + "cm "
    + baseTriangle + "cm "
);

const heightTriangle = 5.5;
console.log("The height of triangle is: " + heightTriangle + "cm");
const perimeterTriangle = triangleSide + triangleSide2 + baseTriangle;
console.log("The perimeter of triangle size: " + perimeterTriangle + "cm");

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log("The area of triangle size: " + areaTriangle + "cm2");
console.groupEnd();
console.group('Circle Log');

//Radio
const circleRadio = 4;
console.log("The radio of circle size is : " + circleRadio + "cm");
//Diameter
const circleDiameter = circleRadio * 2;
console.log("The diameter of circle size is : " + circleDiameter + "cm");
//PI
const PI = Math.PI;
console.log("The PI is: " + PI);
//Circumference
const circlePerimeter = circleDiameter * PI;
console.log("The perimeter of circle size: " + circlePerimeter + "cm");
//Area
const circleArea = (circleRadio * circleRadio) * PI;
console.log("The area of circle size: " + circleArea + "cm2");
console.groupEnd();