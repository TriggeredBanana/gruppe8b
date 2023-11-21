"use strict";

const functions = {

// Lagrer funksjonen for rektangel i en variabel 
rectangle: function (x, y, length, width, color, name) {
    var canvas = document.getElementById(name);
    var square = canvas.getContext("2d");

    square.beginPath();
    square.rect(x, y, length, width);
    square.stroke();
    square.fillStyle = color;
    square.fill();
},

// Lagrer funksjonen for rektangel i en variabel 
triangle: function (x, y, x1, y1, x2, y2, color, name) {
    var canvas = document.getElementById(name);
    var triangle = canvas.getContext("2d");

    triangle.beginPath();
    triangle.moveTo(x, y);
    triangle.lineTo(x1, y1);
    triangle.lineTo(x2, y2);
    triangle.fillStyle = color;
    triangle.fill();
}
}


export default functions;