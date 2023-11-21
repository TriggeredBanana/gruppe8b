"use strict";
// Lagrer funksjonen for rektangel i en variabel
const functions = {
    rectangle: function (x, y, length, width, color, name) {
        var canvas = document.getElementById(name);
        var square = canvas.getContext("2d");

        square.beginPath();
        square.rect(x, y, length, width);
        square.stroke();
        square.fillStyle = color;
        square.fill();
    },

    ellipse: function (x, y, radiusX, radiusY, rotation, startAngle, color, name) {
        var canvas = document.getElementById(name);
        var oval = canvas.getContext("2d");

        oval.beginPath();
        oval.ellipse(x, y, radiusX, radiusY, rotation, startAngle, 2 * Math.PI, name);
        oval.fillStyle = color;
        oval.stroke();
        oval.fill();
    },

    circle: function (x, y, radius, color, name) {
        var canvas = document.getElementById(name);
        var circle = canvas.getContext("2d");

        circle.beginPath();
        circle.arc(x, y, radius, 0, 2 * Math.PI);
        circle.stroke();
        circle.fillStyle = color;
        circle.fill();
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
    },
};

export default functions;