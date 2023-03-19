class Point3D {
    x: number;
    y: number;
    z: number;
};

let firstPoint: Point3D = new Point3D();
let secondPoint: Point3D = new Point3D();
let thirdPoint: Point3D = new Point3D();

firstPoint.x = 1;
firstPoint.y = 2;
firstPoint.z = 3;

secondPoint.x = 3;
secondPoint.y = 6;
secondPoint.z = 10;

thirdPoint.x = 5;
thirdPoint.y = 10;
thirdPoint.z = 15;

console.log("Координаты первой точки: " + "x = " + firstPoint.x + ", y = " + firstPoint.y + ", z = " + firstPoint.z);
console.log("Координаты второй точки: " + "x = " + secondPoint.x + ", y = " + secondPoint.y + ", z = " + secondPoint.z);
console.log("Координаты третьей точки: " + "x = " + thirdPoint.x + ", y = " + thirdPoint.y + ", z = " + thirdPoint.z);