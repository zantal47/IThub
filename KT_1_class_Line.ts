class Line {
    x1: number;
    y1: number;

    x2: number;
    y2: number;
};

let lineOne: Line = new Line();
let lineTwo: Line = new Line();

lineOne.x1 = 5;
lineOne.y1 = 10;
lineOne.x2 = 12;
lineOne.y2 = 8;

lineTwo.x1 = 0;
lineTwo.y1 = 7;
lineTwo.x2 = 29;
lineTwo.y2 = 11;

console.log("Координаты первой линии: " + "x1 = " + lineOne.x1 + ", y1 = " + lineOne.y1 + ", x2 = " + lineOne.x2 + ", y2 = " + lineOne.y2);
console.log("Координаты второй линии: " + "x1 = " + lineTwo.x1 + ", y1 = " + lineTwo.y1 + ", x2 = " + lineTwo.x2 + ", y2 = " + lineTwo.y2);