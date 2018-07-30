const colors = ['orange', 'blue', 'yellow', 'green', 'purple', 'red'];
const shapes = ['I', 'L', 'J', 'O', 'Z', 'T', 'S'];

function Figure(colors, shapes) {
    this.colors = colors;
    this.shapes = shapes; 
} 

let FigureObject = new Figure(colors, shapes);

module.exports = FigureObject;