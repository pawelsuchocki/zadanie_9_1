function getTriangleArea(a, h) {
    a = a > 0 || "nieprawidłowe dane";
    h = h > 0 || "nieprawidłowe dane";
    return a * h / 2;
}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 30);
var triangle3Area = getTriangleArea(30, 45);