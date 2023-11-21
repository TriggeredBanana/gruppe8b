"use strict";

// Lagrer funksjonen for rektangel i en variabel 
const rectangle = function (x, y, length, width, color, name) {
    var canvas = document.getElementById(name);
    var square = canvas.getContext("2d");

    square.beginPath();
    square.rect(x, y, length, width);
    square.stroke();
    square.fillStyle = color;
    square.fill();
};





export default rectangle;